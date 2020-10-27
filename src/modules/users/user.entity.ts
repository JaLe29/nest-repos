import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany, JoinTable } from 'typeorm';
import { GenericEntity } from 'modules/core/generic/generic.entity';

@Entity()
export class UserEntity extends GenericEntity {

  @Column({ length: 100 })
  email: string;
}
