import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class RequiredPipe implements PipeTransform<any> {
  constructor(private readonly requiredFields: string[]) {}

  transform(value: any) {
    for (const field of this.requiredFields) {
      if (
        !value.hasOwnProperty(field) ||
        value[field] === null ||
        value[field] === undefined
      ) {
        throw new BadRequestException(`Missing required field: ${field}`);
      }
    }

    // Check if createdBy and modifiedBy are present and not empty
    if (!value.hasOwnProperty('createdBy') || !value.createdBy) {
      throw new BadRequestException(`Missing or empty 'createdBy' field`);
    }

    if (!value.hasOwnProperty('modifiedBy') || !value.modifiedBy) {
      throw new BadRequestException(`Missing or empty 'modifiedBy' field`);
    }

    return value;
  }
}
