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
export class Frontend {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  repositoryUrl?: string

  @Column({ nullable: true })
  documentationUrl?: string

  @Column({})
  mvpProjectId: string

  @ManyToOne(() => MvpProject, parent => parent.frontends)
  @JoinColumn({ name: 'mvpProjectId' })
  mvpProject?: MvpProject

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
