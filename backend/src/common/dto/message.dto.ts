import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class MessageDto {
  @ApiProperty()
  @Expose()
  message: string;

  constructor(message: string) {
    this.message = message;
  }
}
