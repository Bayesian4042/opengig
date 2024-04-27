import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class TechnicalDesignDocumentCreateDto {
  @IsString()
  @IsOptional()
  highLevelDesignUrl?: string

  @IsString()
  @IsOptional()
  lowLevelDesignUrl?: string

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

export class TechnicalDesignDocumentUpdateDto {
  @IsString()
  @IsOptional()
  highLevelDesignUrl?: string

  @IsString()
  @IsOptional()
  lowLevelDesignUrl?: string

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
