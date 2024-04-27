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
export class Deployment {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  deploymentGuideUrl?: string

  @Column({ nullable: true })
  deploymentScriptUrl?: string

  @Column({})
  mvpProjectId: string

  @ManyToOne(() => MvpProject, parent => parent.deployments)
  @JoinColumn({ name: 'mvpProjectId' })
  mvpProject?: MvpProject

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
