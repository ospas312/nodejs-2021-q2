import { ApiProperty } from '@nestjs/swagger';

export interface IUser {
  id: string;
  name: string;
  login: string;
  password?: string;
  salt?: string;
}

// export type IUserParams = Omit<IUser, 'id'>;
export class IUserDto {
  id: string;

  @ApiProperty()
  login: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;
}
