import { Request, Response } from "express";
import { GetUserDataService } from "../services/GetUserDataService";
import { GetGiftDataService } from "../services/GetGiftDataService";
import { ListGiftsService } from "../services/ListGiftsService";

class GetUserDataController {
  async handle(request: Request, response: Response) {
    let { id } = request.query;
    id = id.toString();

    const getUserDataService = new GetUserDataService();
    const getGiftDataService = new GetGiftDataService();
    const listGiftsService = new ListGiftsService();

    const user = await getUserDataService.getData(id);
    const gift = await getGiftDataService.getData(user.gift_id);
    
    user.gift = gift;

    const gifts = await listGiftsService.listGiftsAvailable();

    return response.render("edit", {
      user: user,
      presentes: gifts
    });
  }
}

export { GetUserDataController };