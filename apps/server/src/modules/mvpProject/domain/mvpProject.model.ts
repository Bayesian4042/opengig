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

import { ProductRequirement } from '../../../modules/productRequirement/domain'

import { ProductRequirementDocument } from '../../../modules/productRequirementDocument/domain'

import { UiDesign } from '../../../modules/uiDesign/domain'

import { TechnicalDesignDocument } from '../../../modules/technicalDesignDocument/domain'

import { Testing } from '../../../modules/testing/domain'

import { Deployment } from '../../../modules/deployment/domain'

import { Frontend } from '../../../modules/frontend/domain'

import { Backend } from '../../../modules/backend/domain'

@Entity()
export class MvpProject {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  name: string

  @Column({ nullable: true })
  description?: string

  @OneToMany(() => ProductRequirement, child => child.mvpProject)
  productRequirements?: ProductRequirement[]

  @OneToMany(() => ProductRequirementDocument, child => child.mvpProject)
  productRequirementDocuments?: ProductRequirementDocument[]

  @OneToMany(() => UiDesign, child => child.mvpProject)
  uiDesigns?: UiDesign[]

  @OneToMany(() => TechnicalDesignDocument, child => child.mvpProject)
  technicalDesignDocuments?: TechnicalDesignDocument[]

  @OneToMany(() => Testing, child => child.mvpProject)
  testings?: Testing[]

  @OneToMany(() => Deployment, child => child.mvpProject)
  deployments?: Deployment[]

  @OneToMany(() => Frontend, child => child.mvpProject)
  frontends?: Frontend[]

  @OneToMany(() => Backend, child => child.mvpProject)
  backends?: Backend[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
