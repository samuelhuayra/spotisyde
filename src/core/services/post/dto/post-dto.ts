import { ArgsType, Field, Int, ObjectType } from "@nestjs/graphql";
import { ApiProperty, ApiPropertyOptional, } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

abstract class PostModel {
    protected id: number
    protected abstract title: string
    protected abstract content: string
    protected abstract published: boolean
    protected abstract authorId: number
}

@ObjectType({ description: 'GraphQL Post Model' })
export class Post extends PostModel {
    @Field(() => Int, { description: `Post's Id` })
    id: number
    @Field({ description: `Post's title` })
    title: string
    @Field({ description: `Post's content` })
    content: string
    @Field({ description: `Post's status` })
    published: boolean
    @Field(() => Int, { description: `User's Id` })
    authorId: number
}

export class PostDto extends PostModel {
    @ApiProperty()
    @IsNotEmpty()
    title: string
    @ApiProperty()
    @IsNotEmpty()
    content: string
    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    published: boolean
    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    authorId: number
}

@ArgsType()//GraphQL
export class PostArgs extends PostModel {
    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    @Field(() => Int, { nullable: true })
    id: number
    @ApiPropertyOptional()
    @Field({ nullable: true })
    title: string
    @ApiPropertyOptional()
    @Field({ nullable: true })
    content: string
    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    @Field({ nullable: true })
    published: boolean
    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    @Field(() => Int, { nullable: true })
    authorId: number
}
