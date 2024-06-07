import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FriendGroupServiceBase } from "./base/friendGroup.service.base";

@Injectable()
export class FriendGroupService extends FriendGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
