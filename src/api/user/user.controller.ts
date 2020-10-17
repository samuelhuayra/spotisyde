/**
 * @author Samuel Huayra
 * @email samuelhuayra@icloud.com
 * @create date 2020-10-17 19:05:32
 * @modify date 2020-10-17 19:05:32
 * @desc User Controller
 */
import { Controller, Post, Body, Get, Param, Query, Put, Delete, ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { UserService } from 'src/core/services/user/user.service';
import { ApiTags } from '@nestjs/swagger';
import { UserDto, UserQueryDto } from 'src/core/services/user/dto/user-dto';

@ApiTags('User')
@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Get(':id')
    async getById(@Param('id', ParseIntPipe) id: number): Promise<UserModel> {
        return this.userService.getById(id);
    }
    @Get()
    @UsePipes(new ValidationPipe({transform: true, transformOptions: {enableImplicitConversion: true}}))
    async get(
        @Query() userQueryDto: UserQueryDto
    ): Promise<UserModel[]> {
        return this.userService.get(userQueryDto);
    }

    @Post()
    @UsePipes(new ValidationPipe({transform: true, transformOptions: {enableImplicitConversion: true}}))
    async post(
        @Body() userData: UserDto,
    ): Promise<UserModel> {
        return this.userService.post(userData);
    }

    @Put(':id')
    @UsePipes(new ValidationPipe({transform: true, transformOptions: {enableImplicitConversion: true}}))
    async put(
        @Param('id', ParseIntPipe) id: number,
        @Body() userData: UserDto
    ): Promise<UserModel> {
        return this.userService.put(id, userData);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<UserModel> {
        return this.userService.delete(id);
    }
}
