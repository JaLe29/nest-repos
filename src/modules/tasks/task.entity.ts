import { GenericEntity } from 'modules/core/generic/generic.entity';
import { UserEntity } from 'modules/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne, OneToMany } from 'typeorm';

@Entity()
export class TaskEntity extends GenericEntity {

  @Column({ length: "10000" })
  text: string

}
