import { Body, Controller, Get, HttpStatus, Param } from "@nestjs/common";
import { ApiResponse, ApiUseTags } from "@nestjs/swagger";
import { UserService } from "./user.service";

@ApiUseTags("ok")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User trouvé et retourné'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  async getById(@Param('id') id: string) {
    return this.userService.getById(id);
  }

  @Get(":id" + "/modifier")
  async modifById(@Param("id") id: string) {
    return this.userService.getById(id);
  }
}
