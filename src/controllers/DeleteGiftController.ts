import { Request, Response } from "express";
import { DeleteGiftService } from "../services/DeleteGiftService";

class DeleteGiftController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const deleteGiftService = new DeleteGiftService();

    try {
      await deleteGiftService.delete(id).then(() => {
        response.render("message", {
          message: "Presente deletado com sucesso"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Erro ao deletar presente: ${err.message}`
      });
    }
  }
}

export { DeleteGiftController };