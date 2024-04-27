import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class TestingCreateDto {
  @IsString()
  @IsOptional()
  testPlanDocumentUrl?: string

  @IsString()
  @IsOptional()
  testCasesDocumentUrl?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  mvpProjectId?: string
}

export class TestingUpdateDto {
  @IsString()
  @IsOptional()
  testPlanDocumentUrl?: string

  @IsString()
  @IsOptional()
  testCasesDocumentUrl?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  mvpProjectId?: string
}
