import { Injectable } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { UserDaoService } from 'src/prisma/services/user-dao/user-dao.service';

@Injectable()
export class UserService {
    constructor(
        private readonly userDaoService: UserDaoService
    ) { }

    async signupUser(userData: { name?: string; email: string }): Promise<UserModel> {
        return this.userDaoService.createUser(userData)
    }
}
