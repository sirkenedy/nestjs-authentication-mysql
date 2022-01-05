import { OmitType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends OmitType(CreateBookDto, [] as const) {
    id: number
}
