/**
 * @author Samuel Huayra
 * @email samuelhuayra@icloud.com
 * @create date 2020-10-17 18:55:46
 * @modify date 2020-10-17 18:55:46
 * @desc Generic PostDto
 */
import { ApiProperty, ApiPropertyOptional,  } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

abstract class Post {
    protected abstract title :string;
    protected abstract content :string;
    protected abstract published :boolean;
    protected abstract authorId :number;
}

export class PostDto extends Post {
    @ApiProperty()
    @IsNotEmpty()
    title :string;
    @ApiProperty()
    @IsNotEmpty()
    content :string;
    @ApiProperty({required:false})
    @IsOptional()
    @IsBoolean()
    published :boolean;
    @ApiProperty({required:false})
    @IsOptional()
    @IsNumber()
    authorId :number;
}

export class PostQueryDto extends Post {
    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    id :number;
    @ApiPropertyOptional()
    title :string;
    @ApiPropertyOptional()
    content :string;
    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    published :boolean;
    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    authorId :number;
}
