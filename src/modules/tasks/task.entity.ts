import { GenericEntity } from 'modules/core/generic/generic.entity';
import { UserEntity } from 'modules/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne, OneToMany } from 'typeorm';

@Entity()
export class TaskEntity extends GenericEntity {

  @Column({ length: "10000" })
  text: string

  @Column()
  type: string

  @Column("json")
  images: string[];

  @Column({ default: 'waiting' })
  state: string

  @Column({ type: 'datetime', nullable: true })
  targetTime: Date

  @Column({ type: 'datetime', nullable: true })
  publishedTime: Date

  @ManyToOne(() => UserEntity, user => user.accounts)
  @JoinColumn()
  user: Promise<UserEntity>;

}
