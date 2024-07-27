/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumVariationSize } from "./EnumVariationSize";
import { IsEnum, IsOptional, IsString, MaxLength } from "class-validator";
import { EnumVariationColor } from "./EnumVariationColor";

@InputType()
class VariationCreateInput {
  @ApiProperty({
    required: false,
    enum: EnumVariationSize,
  })
  @IsEnum(EnumVariationSize)
  @IsOptional()
  @Field(() => EnumVariationSize, {
    nullable: true,
  })
  size?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumVariationColor,
  })
  @IsEnum(EnumVariationColor)
  @IsOptional()
  @Field(() => EnumVariationColor, {
    nullable: true,
  })
  color?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  key?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  value?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  createdBy?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  deletedBy?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  updatedBy?: string | null;
}

export { VariationCreateInput as VariationCreateInput };
