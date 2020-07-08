## Description

이 프로젝트는 NestJs를 이용해서 GCP Pub/Sub 서비스의 subscription client 를 빠르게 셋팅하기 위한 template 을 제공합니다.

## 환경 변수 설정

1) GCP console 을 통하여 프로젝트의 서비스 계정으로부터 키를 발급받아 .env 파일에 해당 파일 경로를 GOOGLE_APPLICATION_CREDENTIALS 로 셋팅합니다.
2) GCP console 을 통하여 Pub/Sub 구독 생성하고 구독 이름을 GCP_SUBSCRIPTION_NAME 에 셋팅합니다.

ex) .env 파일 내옹 
```bash
GOOGLE_APPLICATION_CREDENTIALS=/Users/peterchoi/WorkSpace/pubsub-template/test-project-credential.json
GCP_SUBSCRIPTION_NAME=projects/my-project/subscriptions/test-topic
```
