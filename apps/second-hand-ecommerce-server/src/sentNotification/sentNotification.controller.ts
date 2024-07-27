import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SentNotificationService } from "./sentNotification.service";
import { SentNotificationControllerBase } from "./base/sentNotification.controller.base";

@swagger.ApiTags("sentNotifications")
@common.Controller("sentNotifications")
export class SentNotificationController extends SentNotificationControllerBase {
  constructor(
    protected readonly service: SentNotificationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
