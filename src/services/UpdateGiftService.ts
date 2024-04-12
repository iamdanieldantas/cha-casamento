import { getCustomRepository } from "typeorm";
import { Gift } from "../entities/Gift";
import { GiftsRepository } from "../repositories/GiftsRepository";

interface IGift {
  id: string
  nome_presente: string
  disponivel: boolean
}

class UpdateGiftService {
  async update({ id, nome_presente, disponivel }: IGift) {
    const giftsRepository = getCustomRepository(GiftsRepository);

    var isAvailable = (String(disponivel) === 'true');

    const gift = await giftsRepository
      .createQueryBuilder()
      .update(Gift)
      .set({ nome_presente, disponivel: isAvailable })
      .where("id = :id", { id })
      .execute();

    return gift;
  }

  async setGiftToUnavailable(id: string){
    const giftsRepository = getCustomRepository(GiftsRepository);

    const gift = await giftsRepository
      .createQueryBuilder()
      .update(Gift)
      .set({ disponivel: false })
      .where("id = :id", { id })
      .execute();

    return gift;
  }
}

export { UpdateGiftService };