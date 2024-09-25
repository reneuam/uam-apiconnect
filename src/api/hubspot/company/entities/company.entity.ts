import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('companies')
export class Company {
  @PrimaryColumn({ nullable: false })
  id: string;
}
