import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class BackendCreateDto {
  @IsString()
  @IsOptional()
  repositoryUrl?: string

  @IsString()
  @IsOptional()
  documentationUrl?: string

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

export class BackendUpdateDto {
  @IsString()
  @IsOptional()
  repositoryUrl?: string

  @IsString()
  @IsOptional()
  documentationUrl?: string

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
