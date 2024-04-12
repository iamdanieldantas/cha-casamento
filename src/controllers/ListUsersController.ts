import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUsersService";
import { ListGiftsService } from "../services/ListGiftsService";

class ListUsersController {
  async handle(request: Request, response: Response) {
    const listUsersService = new ListUsersService();
    const listGiftsService = new ListGiftsService();

    const users = await listUsersService.list();
    const gifts = await listGiftsService.list();

    return response.render("index", {
      users: users,
      presentes: gifts
    });
  }
}

export { ListUsersController };