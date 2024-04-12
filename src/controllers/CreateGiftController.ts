import { Request, Response } from "express";
import { CreateGiftService } from "../services/CreateGiftService";

class CreateGiftController {
  async handle(request: Request, response: Response) {
    const { nome_presente, disponivel } = request.body;

    const createGiftService = new CreateGiftService();

    try {
      await createGiftService.create({
        nome_presente,
        disponivel
      }).then(() => {
        response.render("message", {
          message: "Presente cadastrado com sucesso"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Erro ao cadastrar presente: ${err.message}`
      });
    }

  }
}

export { CreateGiftController };