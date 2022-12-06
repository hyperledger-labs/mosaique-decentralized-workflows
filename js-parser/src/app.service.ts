import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'REST API for Mosaique Node.js Parser and Template Handler';
  }
}
