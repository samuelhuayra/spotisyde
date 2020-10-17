/**
 * @author Samuel Huayra
 * @email samuelhuayra@icloud.com
 * @create date 2020-10-17 18:56:13
 * @modify date 2020-10-17 18:56:13
 * @desc Generic UserDto
 */
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

abstract class User {
    protected abstract name: string;
    protected abstract email: string;
}

export class UserDto extends User{
    @ApiProperty()
    @IsNotEmpty()
    name: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;
}

export class UserQueryDto extends User{
    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    id: number;
    @ApiPropertyOptional()
    name: string;
    @ApiPropertyOptional()
    @IsOptional()
    @IsEmail()
    email: string;
}