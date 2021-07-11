import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { default: '' })
  name!: string;

  @Column('varchar', { unique: true })
  login!: string;

  @Column('varchar')
  password!: string;

  static toResponse(user: User) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
