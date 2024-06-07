import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FriendGroupResolverBase } from "./base/friendGroup.resolver.base";
import { FriendGroup } from "./base/FriendGroup";
import { FriendGroupService } from "./friendGroup.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FriendGroup)
export class FriendGroupResolver extends FriendGroupResolverBase {
  constructor(
    protected readonly service: FriendGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
