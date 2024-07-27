import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VariationService } from "./variation.service";
import { VariationControllerBase } from "./base/variation.controller.base";

@swagger.ApiTags("variations")
@common.Controller("variations")
export class VariationController extends VariationControllerBase {
  constructor(
    protected readonly service: VariationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
