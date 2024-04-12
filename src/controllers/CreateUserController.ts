import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { gift_id, username, email, telefone } = request.body;

    const createUserService = new CreateUserService();

    try {
      await createUserService.create({
        gift_id,
        username,
        email,
        telefone
      }).then(() => {
        response.render("message", {
          message: "Usuário cadastrado com sucesso"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Erro ao cadastrar usuário: ${err.message}`
      });
    }

  }
}

export { CreateUserController };