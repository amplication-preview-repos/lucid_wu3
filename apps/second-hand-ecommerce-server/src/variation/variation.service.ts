import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VariationServiceBase } from "./base/variation.service.base";

@Injectable()
export class VariationService extends VariationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
