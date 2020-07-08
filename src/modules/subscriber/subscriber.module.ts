import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';

@Module({
  providers: [SubscriberService],
})
export class SubscriberModule implements OnModuleInit {
  private readonly logger: Logger = new Logger(this.constructor.name);

  constructor(private readonly subscriberService: SubscriberService) {
    this.logger.debug(`${this.constructor.name} 이 생성되었습니다.`);
  }

  onModuleInit(): any {
    this.logger.debug(`onModuleInit 이 호출되었습니다.`);
    this.subscriberService.subscribe();
  }
}
