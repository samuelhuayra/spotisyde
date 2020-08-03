import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('spotiside')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getName(): string {
  //   return `${this.appService.getName()} ${this.appService.getVersion()}`;
  // }
}
