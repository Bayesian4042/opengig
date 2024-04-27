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
export class Testing {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  testPlanDocumentUrl?: string

  @Column({ nullable: true })
  testCasesDocumentUrl?: string

  @Column({})
  mvpProjectId: string

  @ManyToOne(() => MvpProject, parent => parent.testings)
  @JoinColumn({ name: 'mvpProjectId' })
  mvpProject?: MvpProject

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
