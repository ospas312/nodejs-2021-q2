//import bcrypt from 'bcrypt';
//import jwt from 'jsonwebtoken';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

//import { config } from '../common/config';
//const { JWT_SECRET_KEY } = process.env;

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { default: '' })
  name: string;

  @Column('varchar', { unique: true })
  login!: string;

  @Column('varchar')
  password!: string;

  //@BeforeInsert()
  //generatePasswordHash() {
  //  this.password = bcrypt.hashSync(this.password, 10);
  //}

  static toResponse(user: User) {
    const { id, name, login } = user;
    return { id, name, login };
  }

  /*generateUserToken() {
    const token = jwt.sign(
      { userId: this.id, login: this.login },
      JWT_SECRET_KEY,
      {
        expiresIn: '1h',
      },
    );
    return token;
  }*/
}
