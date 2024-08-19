import { Module } from '@nestjs/common';
import { SamAssistantService } from './sam-assistant.service';
import { SamAssistantController } from './sam-assistant.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [SamAssistantController],
  providers: [SamAssistantService],
  imports: [
    ConfigModule
  ]
})
export class SamAssistantModule {}
