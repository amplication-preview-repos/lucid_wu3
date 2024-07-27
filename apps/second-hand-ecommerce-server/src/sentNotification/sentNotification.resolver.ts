import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SentNotificationResolverBase } from "./base/sentNotification.resolver.base";
import { SentNotification } from "./base/SentNotification";
import { SentNotificationService } from "./sentNotification.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SentNotification)
export class SentNotificationResolver extends SentNotificationResolverBase {
  constructor(
    protected readonly service: SentNotificationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
