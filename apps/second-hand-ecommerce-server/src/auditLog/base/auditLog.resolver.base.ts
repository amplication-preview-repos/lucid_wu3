/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AuditLog } from "./AuditLog";
import { AuditLogCountArgs } from "./AuditLogCountArgs";
import { AuditLogFindManyArgs } from "./AuditLogFindManyArgs";
import { AuditLogFindUniqueArgs } from "./AuditLogFindUniqueArgs";
import { CreateAuditLogArgs } from "./CreateAuditLogArgs";
import { UpdateAuditLogArgs } from "./UpdateAuditLogArgs";
import { DeleteAuditLogArgs } from "./DeleteAuditLogArgs";
import { AuditLogService } from "../auditLog.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AuditLog)
export class AuditLogResolverBase {
  constructor(
    protected readonly service: AuditLogService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AuditLog",
    action: "read",
    possession: "any",
  })
  async _auditLogsMeta(
    @graphql.Args() args: AuditLogCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AuditLog])
  @nestAccessControl.UseRoles({
    resource: "AuditLog",
    action: "read",
    possession: "any",
  })
  async auditLogs(
    @graphql.Args() args: AuditLogFindManyArgs
  ): Promise<AuditLog[]> {
    return this.service.auditLogs(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AuditLog, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AuditLog",
    action: "read",
    possession: "own",
  })
  async auditLog(
    @graphql.Args() args: AuditLogFindUniqueArgs
  ): Promise<AuditLog | null> {
    const result = await this.service.auditLog(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AuditLog)
  @nestAccessControl.UseRoles({
    resource: "AuditLog",
    action: "create",
    possession: "any",
  })
  async createAuditLog(
    @graphql.Args() args: CreateAuditLogArgs
  ): Promise<AuditLog> {
    return await this.service.createAuditLog({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AuditLog)
  @nestAccessControl.UseRoles({
    resource: "AuditLog",
    action: "update",
    possession: "any",
  })
  async updateAuditLog(
    @graphql.Args() args: UpdateAuditLogArgs
  ): Promise<AuditLog | null> {
    try {
      return await this.service.updateAuditLog({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AuditLog)
  @nestAccessControl.UseRoles({
    resource: "AuditLog",
    action: "delete",
    possession: "any",
  })
  async deleteAuditLog(
    @graphql.Args() args: DeleteAuditLogArgs
  ): Promise<AuditLog | null> {
    try {
      return await this.service.deleteAuditLog(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
