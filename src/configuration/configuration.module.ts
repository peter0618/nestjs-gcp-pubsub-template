import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // 이렇게 셋팅하면 app root 폴더의 .env 파일에 정의한 환경변수를 application 에서 사용할 수 있습니다.
    // 사용 방법은 process.env 를 통해서 접근하는 방법과 ConfigService 를 주입받아서 사용하는 방법이 있습니다.
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class ConfigurationModule {}
