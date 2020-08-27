import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    async onModuleInit(): Promise<void> {
        console.log('>>>> CONNECT');
        await this.$connect();
    }
    
    async onModuleDestroy(): Promise<void> {
        console.log('>>>> DISCONNECT');
        await this.$disconnect();
    }
}
