import { getCustomRepository } from "typeorm";
import { GiftsRepository } from "../repositories/GiftsRepository";

interface IGift {
  nome_presente: string;
  disponivel: boolean;
}

class CreateGiftService {
  async create({ nome_presente, disponivel }: IGift) {
    if (!nome_presente) {
      throw new Error("Por favor preencha todos os campos");
    }

    const giftsRepository = getCustomRepository(GiftsRepository);
    const usernameAlreadyExists = await giftsRepository.findOne({ nome_presente });

    if (usernameAlreadyExists) {
      throw new Error("Gift já está cadastrado");
    }

    var isAvailable = (String(disponivel) === 'true');
    const gift = giftsRepository.create({ nome_presente, disponivel: isAvailable });

    await giftsRepository.save(gift);

    return gift;

  }
}

export { CreateGiftService };