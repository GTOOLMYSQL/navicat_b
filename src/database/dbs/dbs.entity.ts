import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dbs {
    @PrimaryGeneratedColumn()
    id: string;
}
