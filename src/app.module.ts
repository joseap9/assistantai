import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { SamAssistantModule } from './sam-assistant/sam-assistant.module';
import { EnvConfiguration } from './config/env.config';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ EnvConfiguration ]
    }),
    SamAssistantModule,
  ]
})
export class AppModule {}
