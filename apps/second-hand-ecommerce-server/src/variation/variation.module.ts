import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VariationModuleBase } from "./base/variation.module.base";
import { VariationService } from "./variation.service";
import { VariationController } from "./variation.controller";
import { VariationResolver } from "./variation.resolver";

@Module({
  imports: [VariationModuleBase, forwardRef(() => AuthModule)],
  controllers: [VariationController],
  providers: [VariationService, VariationResolver],
  exports: [VariationService],
})
export class VariationModule {}
