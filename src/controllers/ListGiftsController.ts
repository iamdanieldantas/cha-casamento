import { Request, Response } from "express";
import { ListGiftsService } from "../services/ListGiftsService";

class ListGiftsController {
  async handle(request: Request, response: Response) {
    const listGiftsService = new ListGiftsService();

    const gifts = await listGiftsService.listGiftsAvailable();

    return response.render("add", {
      presentes: gifts
    });
  }

  async handleConvidados(request: Request, response: Response) {
    const listGiftsService = new ListGiftsService();

    const gifts = await listGiftsService.list();

    return response.render("index-convidados", {
      presentes: gifts
    });
  }
}

export { ListGiftsController };