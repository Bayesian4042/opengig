import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class UserCreateDto {
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  name: string

  @IsOptional()
  @IsString()
  pictureUrl: string

  @IsNotEmpty()
  userType: string

  @IsOptional()
  specialization?: string

  @IsOptional()
  techStacks?: string
}

export class UserUpdateDto {
  @IsEmail()
  @IsOptional()
  email?: string

  @IsOptional()
  @IsString()
  name?: string

  @IsOptional()
  @IsString()
  pictureUrl?: string

  @IsString()
  userType?: string

  @IsString()
  specialization?: string

  @IsString()
  techStacks?: string
}
