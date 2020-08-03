import { Controller, Get } from '@nestjs/common';
import { AuthService } from 'src/authorization/services/auth/auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Get()
    getHello(): string {
        return this.authService.getAuth();
    }
}
