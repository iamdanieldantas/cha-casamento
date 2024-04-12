import { Request, Response } from "express";
import { UpdateGiftService } from "../services/UpdateGiftService";

class UpdateGiftController {
  async handle(request: Request, response: Response) {
    const { id, nome_presente, disponivel } = request.body;

    const updateGiftService = new UpdateGiftService();

    try {
      await updateGiftService.update({ id, nome_presente, disponivel }).then(() => {
        response.render("message", {
          message: "Presente atualizado com sucesso"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Erro ao atualizar presente: ${err.message}`
      });
    }

  }
}

export { UpdateGiftController };