/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsDate,
  IsString,
  MaxLength,
  ValidateNested,
  IsNumber,
  Min,
  Max,
  IsOptional,
} from "class-validator";

import { Type } from "class-transformer";
import { User } from "../../user/base/User";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { Trip } from "../../trip/base/Trip";
import { Wishlist } from "../../wishlist/base/Wishlist";

@ObjectType()
class Listing {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  description!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  istingCreatedBy?: User;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  locationData!: JsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  locationType!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  mapData!: JsonValue;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  photos!: JsonValue;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  placeAmeneties!: JsonValue;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  placeSpace!: JsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  placeType!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @Field(() => Number)
  price!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  title!: string;

  @ApiProperty({
    required: false,
    type: () => [Trip],
  })
  @ValidateNested()
  @Type(() => Trip)
  @IsOptional()
  trips?: Array<Trip>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [Wishlist],
  })
  @ValidateNested()
  @Type(() => Wishlist)
  @IsOptional()
  wishlists?: Array<Wishlist>;
}

export { Listing as Listing };
