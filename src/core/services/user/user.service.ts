import { Injectable } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { UserDaoService } from 'src/prisma/services/user-dao/user-dao.service';
import { BaseService } from '../base/base-service';
import { UserDto, UserQueryDto } from './dto/user-dto';

@Injectable()
export class UserService extends BaseService<UserDto,UserQueryDto,UserModel> {
    constructor(
        private readonly userDaoService: UserDaoService
    ) {
        super(userDaoService)
    }
}
