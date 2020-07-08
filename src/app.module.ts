import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './configuration/configuration.module';
import { SubscriberModule } from './modules/subscriber/subscriber.module';

@Module({
  imports: [ConfigurationModule, SubscriberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit{
  private readonly logger: Logger = new Logger(this.constructor.name);

  onModuleInit(): any {
    this.logger.debug('onModuleInit() is called!!');
  }
}
