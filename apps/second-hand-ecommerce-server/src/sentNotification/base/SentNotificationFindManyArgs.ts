/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SentNotificationWhereInput } from "./SentNotificationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SentNotificationOrderByInput } from "./SentNotificationOrderByInput";

@ArgsType()
class SentNotificationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SentNotificationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SentNotificationWhereInput, { nullable: true })
  @Type(() => SentNotificationWhereInput)
  where?: SentNotificationWhereInput;

  @ApiProperty({
    required: false,
    type: [SentNotificationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SentNotificationOrderByInput], { nullable: true })
  @Type(() => SentNotificationOrderByInput)
  orderBy?: Array<SentNotificationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SentNotificationFindManyArgs as SentNotificationFindManyArgs };