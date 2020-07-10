import { Injectable, Logger } from '@nestjs/common';
import { PubSub } from '@google-cloud/pubsub';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PublisherService {
  private readonly logger: Logger = new Logger(this.constructor.name);
  private readonly pubSubClient = new PubSub();

  constructor(private readonly configService: ConfigService) {}

  async pub() {
    return await this.publishMessage();;
  }

  async publishMessage() {
    const topicName = this.configService.get('GCP_TOPIC_NAME');
    const data = JSON.stringify({ foo: 'bar' });
    const dataBuffer = Buffer.from(data);

    const messageId = await this.pubSubClient.topic(topicName).publish(dataBuffer);
    console.log(`Message ${messageId} published.`);
    return messageId;
  }
}
