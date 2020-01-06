import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Connect {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  sourceid: string;

  @Column()
  port: string;

  @Column()
  ip: string;

  @Column()
  dbName: string;

  @Column()
  sourceDesc: string;

  @Column()
  password: string;

  @Column()
  username: string;
}
