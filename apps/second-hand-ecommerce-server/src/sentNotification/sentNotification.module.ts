import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SentNotificationModuleBase } from "./base/sentNotification.module.base";
import { SentNotificationService } from "./sentNotification.service";
import { SentNotificationController } from "./sentNotification.controller";
import { SentNotificationResolver } from "./sentNotification.resolver";

@Module({
  imports: [SentNotificationModuleBase, forwardRef(() => AuthModule)],
  controllers: [SentNotificationController],
  providers: [SentNotificationService, SentNotificationResolver],
  exports: [SentNotificationService],
})
export class SentNotificationModule {}
