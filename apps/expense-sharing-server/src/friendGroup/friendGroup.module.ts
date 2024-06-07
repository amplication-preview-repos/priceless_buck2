import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FriendGroupModuleBase } from "./base/friendGroup.module.base";
import { FriendGroupService } from "./friendGroup.service";
import { FriendGroupController } from "./friendGroup.controller";
import { FriendGroupResolver } from "./friendGroup.resolver";

@Module({
  imports: [FriendGroupModuleBase, forwardRef(() => AuthModule)],
  controllers: [FriendGroupController],
  providers: [FriendGroupService, FriendGroupResolver],
  exports: [FriendGroupService],
})
export class FriendGroupModule {}
