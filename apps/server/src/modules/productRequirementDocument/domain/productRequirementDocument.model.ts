import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { MvpProject } from '../../../modules/mvpProject/domain'

@Entity()
export class ProductRequirementDocument {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  documentUrl: string

  @Column({})
  mvpProjectId: string

  @ManyToOne(() => MvpProject, parent => parent.productRequirementDocuments)
  @JoinColumn({ name: 'mvpProjectId' })
  mvpProject?: MvpProject

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
