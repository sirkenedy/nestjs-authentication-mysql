import { OmitType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends OmitType(CreateBookDto, ['user'] as const) {
    id: number
}
