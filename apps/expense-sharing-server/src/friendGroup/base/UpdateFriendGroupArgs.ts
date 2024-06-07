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
import { FriendGroupWhereUniqueInput } from "./FriendGroupWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FriendGroupUpdateInput } from "./FriendGroupUpdateInput";

@ArgsType()
class UpdateFriendGroupArgs {
  @ApiProperty({
    required: true,
    type: () => FriendGroupWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FriendGroupWhereUniqueInput)
  @Field(() => FriendGroupWhereUniqueInput, { nullable: false })
  where!: FriendGroupWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FriendGroupUpdateInput,
  })
  @ValidateNested()
  @Type(() => FriendGroupUpdateInput)
  @Field(() => FriendGroupUpdateInput, { nullable: false })
  data!: FriendGroupUpdateInput;
}

export { UpdateFriendGroupArgs as UpdateFriendGroupArgs };
