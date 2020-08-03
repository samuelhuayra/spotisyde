import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  
  getName(): string {
    return this.configService.get<string>('NAME', 'Spotiside');
  }

  getVersion(): string {
    return `v${this.configService.get<string>('VERSION', '1.0')}`;
  }

}
