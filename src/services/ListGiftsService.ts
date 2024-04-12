import { getCustomRepository } from "typeorm";
import { GiftsRepository } from "../repositories/GiftsRepository";

class ListGiftsService {
  async list() {
    const giftsRepository = getCustomRepository(GiftsRepository);

    const gift = await giftsRepository.find();

    return gift;
  }

  async listGiftsAvailable() {
    const giftsRepository = getCustomRepository(GiftsRepository);
    const gift = await giftsRepository.find({ where: { disponivel: true } });

    return gift;
  }
}

export { ListGiftsService };