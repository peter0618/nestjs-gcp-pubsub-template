import { Injectable, Logger } from '@nestjs/common';
import { PubSub } from '@google-cloud/pubsub';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SubscriberService {
  private readonly logger: Logger = new Logger(this.constructor.name);
  private readonly pubSubClient = new PubSub();

  constructor(private readonly configService: ConfigService) {}

  subscribe() {
    const subscriptionName = this.configService.get('GCP_SUBSCRIPTION_NAME');
    this.logger.debug(`subscriptionName : ${subscriptionName}`);
    const subscription = this.pubSubClient.subscription(subscriptionName);

    const messageHandler = message => {
      console.log(`Received message ${message.id}:`);
      console.log(`\tData: ${message.data}`);
      console.log(`\tAttributes: ${JSON.stringify(message.attributes)}`);

      const data = JSON.parse(message.data);
      this.logger.debug(data);

      // message.ack(); // ack 를 날리면 더 이상 동일 한 메시지가 다시 전송되지 않음.
    };

    subscription.on('message', messageHandler);

  }
}
