import { Module } from '@nestjs/common';
import { AuthorizationModule } from './authorization/authorization.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    imports:[
        AuthorizationModule,
        PrismaModule
    ]
})
export class ApiModule {}
