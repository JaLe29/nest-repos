import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';

@Entity()
export class GenericEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: 'int',
    width: 11,
    nullable: false,
    readonly: true,
    default: () => '0',
    transformer: {
      to: (value?: Date) => (!value ? value : Math.round(value.getTime() / 1000)),
      from: (value?: number) => (!value ? value : new Date(value * 1000))
    }
  })
  createdAt: Date;

  @Column({
    type: 'int',
    width: 11,
    nullable: true,
    default: () => null,
    transformer: {
      to: (value?: Date) => (!value ? value : Math.round(value.getTime() / 1000)),
      from: (value?: number) => (!value ? value : new Date(value * 1000))
    }
  })
  updatedAt?: Date;

  @BeforeInsert()
  updateDateCreation() {
    this.createdAt = new Date();
  }

  @BeforeUpdate()
  updateDateUpdate() {
    this.updatedAt = new Date();
  }
}
