import { Request, Response } from "express";
import { GetGiftDataService } from "../services/GetGiftDataService";

class GetGiftDataController {
  async handle(request: Request, response: Response) {
    let { id } = request.query;
    id = id.toString();

    const getGiftDataService = new GetGiftDataService();

    const presente = await getGiftDataService.getData(id);

    return response.render("edit-gift", {
      presente: presente
    });
  }
}

export { GetGiftDataController };