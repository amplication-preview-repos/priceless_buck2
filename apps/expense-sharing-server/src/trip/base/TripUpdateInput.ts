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
import { IsString, IsOptional, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ExpenseUpdateManyWithoutTripsInput } from "./ExpenseUpdateManyWithoutTripsInput";
import { UserUpdateManyWithoutTripsInput } from "./UserUpdateManyWithoutTripsInput";

@InputType()
class TripUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  destination?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => ExpenseUpdateManyWithoutTripsInput,
  })
  @ValidateNested()
  @Type(() => ExpenseUpdateManyWithoutTripsInput)
  @IsOptional()
  @Field(() => ExpenseUpdateManyWithoutTripsInput, {
    nullable: true,
  })
  expenses?: ExpenseUpdateManyWithoutTripsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutTripsInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutTripsInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutTripsInput, {
    nullable: true,
  })
  users?: UserUpdateManyWithoutTripsInput;
}

export { TripUpdateInput as TripUpdateInput };