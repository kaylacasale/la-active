import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class OwnerInterceptor implements NestInterceptor {
  constructor(
    private readonly properties: string[],
    private readonly isUserObject = false,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    // Check if the user is authenticated and the owner's ID is available
    const ownerId = request.user ? request.user.id : null;

    return next.handle().pipe(
      map((data) => {
        if (!ownerId) {
          // If ownerId is not available, return data as-is
          return data;
        }

        if (this.isUserObject) {
          // If isUserObject is true, replace the entire user object
          return {
            ...data,
            user: ownerId,
          };
        }

        // Replace specified properties with ownerId
        for (const property of this.properties) {
          if (data.hasOwnProperty(property)) {
            data[property] = ownerId;
          }
        }

        return data;
      }),
    );
  }
}
