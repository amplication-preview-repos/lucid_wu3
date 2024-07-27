/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { OfferService } from "../offer.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OfferCreateInput } from "./OfferCreateInput";
import { Offer } from "./Offer";
import { OfferFindManyArgs } from "./OfferFindManyArgs";
import { OfferWhereUniqueInput } from "./OfferWhereUniqueInput";
import { OfferUpdateInput } from "./OfferUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OfferControllerBase {
  constructor(
    protected readonly service: OfferService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Offer })
  @nestAccessControl.UseRoles({
    resource: "Offer",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createOffer(@common.Body() data: OfferCreateInput): Promise<Offer> {
    return await this.service.createOffer({
      data: {
        ...data,

        product: data.product
          ? {
              connect: data.product,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        offerAmount: true,
        status: true,
        buyer: true,

        product: {
          select: {
            id: true,
          },
        },

        createdBy: true,
        updatedBy: true,
        deletedBy: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Offer] })
  @ApiNestedQuery(OfferFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Offer",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async offers(@common.Req() request: Request): Promise<Offer[]> {
    const args = plainToClass(OfferFindManyArgs, request.query);
    return this.service.offers({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        offerAmount: true,
        status: true,
        buyer: true,

        product: {
          select: {
            id: true,
          },
        },

        createdBy: true,
        updatedBy: true,
        deletedBy: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Offer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Offer",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async offer(
    @common.Param() params: OfferWhereUniqueInput
  ): Promise<Offer | null> {
    const result = await this.service.offer({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        offerAmount: true,
        status: true,
        buyer: true,

        product: {
          select: {
            id: true,
          },
        },

        createdBy: true,
        updatedBy: true,
        deletedBy: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Offer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Offer",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateOffer(
    @common.Param() params: OfferWhereUniqueInput,
    @common.Body() data: OfferUpdateInput
  ): Promise<Offer | null> {
    try {
      return await this.service.updateOffer({
        where: params,
        data: {
          ...data,

          product: data.product
            ? {
                connect: data.product,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          offerAmount: true,
          status: true,
          buyer: true,

          product: {
            select: {
              id: true,
            },
          },

          createdBy: true,
          updatedBy: true,
          deletedBy: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Offer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Offer",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteOffer(
    @common.Param() params: OfferWhereUniqueInput
  ): Promise<Offer | null> {
    try {
      return await this.service.deleteOffer({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          offerAmount: true,
          status: true,
          buyer: true,

          product: {
            select: {
              id: true,
            },
          },

          createdBy: true,
          updatedBy: true,
          deletedBy: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
