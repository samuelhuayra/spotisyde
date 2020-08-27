import { Controller, Post, Body } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { UserService } from 'src/core/services/user/user.service';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/UserDto';

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Post()
    async signupUser(
        @Body() userData: UserDto,
    ): Promise<UserModel> {
        return this.userService.signupUser(userData);
    }
}
