import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class DeploymentCreateDto {
  @IsString()
  @IsOptional()
  deploymentGuideUrl?: string

  @IsString()
  @IsOptional()
  deploymentScriptUrl?: string

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

export class DeploymentUpdateDto {
  @IsString()
  @IsOptional()
  deploymentGuideUrl?: string

  @IsString()
  @IsOptional()
  deploymentScriptUrl?: string

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
