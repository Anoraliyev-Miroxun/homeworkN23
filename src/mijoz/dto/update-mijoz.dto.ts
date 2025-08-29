import { PartialType } from '@nestjs/mapped-types';
import { CreateMijozDto } from './create-mijoz.dto';

export class UpdateMijozDto extends PartialType(CreateMijozDto) {}
