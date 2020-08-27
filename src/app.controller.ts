import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Spotisyde')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHome():any {
    return this.appService.getHome();
  }
}
