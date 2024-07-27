import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SentNotificationServiceBase } from "./base/sentNotification.service.base";

@Injectable()
export class SentNotificationService extends SentNotificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
