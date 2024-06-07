import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FriendGroupService } from "./friendGroup.service";
import { FriendGroupControllerBase } from "./base/friendGroup.controller.base";

@swagger.ApiTags("friendGroups")
@common.Controller("friendGroups")
export class FriendGroupController extends FriendGroupControllerBase {
  constructor(
    protected readonly service: FriendGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
