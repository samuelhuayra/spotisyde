import { ArgsType, Field, Int, ObjectType } from "@nestjs/graphql";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { Post } from "../../post/dto/post-dto";

abstract class UserModel {
    protected id: number
    protected abstract name: string
    protected abstract email: string
}

@ObjectType({ description: 'GraphQL User Model' })
export class User extends UserModel {
    @Field(() => Int, { description: `User's Id`, nullable: true })
    id: number
    @Field({ description: `User's name` })
    name: string
    @Field({ description: `User's email` })
    email: string
    @Field(() => [Post], { nullable: 'itemsAndList', description: `User's posts` })
    posts?: Post[]
}

//Open API
export class UserDto extends UserModel {
    @ApiProperty()
    @IsNotEmpty()
    name: string
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string
}

@ArgsType()//GraphQL
export class UserQueryDto extends UserModel {
    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    @Field(() => Int, { nullable: true })
    id: number
    @ApiPropertyOptional()
    @Field({ nullable: true })
    name: string
    @ApiPropertyOptional()
    @IsOptional()
    @IsEmail()
    @Field({ nullable: true })
    email: string
}