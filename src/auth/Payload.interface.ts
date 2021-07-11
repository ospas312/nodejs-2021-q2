import { ApiProperty } from '@nestjs/swagger';

export class Payload {
  constructor(id: string, login: string, name: string) {
    this.id = id;
    this.login = login;
    this.name = name;
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  login: string;

  @ApiProperty()
  name: string;
}
