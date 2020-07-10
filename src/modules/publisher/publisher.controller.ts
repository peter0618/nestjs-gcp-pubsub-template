import { Controller, Get, Logger } from '@nestjs/common';
import { PublisherService } from './publisher.service';

@Controller('publisher')
export class PublisherController {
  private readonly logger: Logger = new Logger(this.constructor.name);
  constructor(private readonly publisherService: PublisherService) {}

  @Get()
  async publishTest() {
    this.logger.debug(`publishTest()`);
    return await this.publisherService.pub();
  }
}
