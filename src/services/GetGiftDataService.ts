import { getCustomRepository } from "typeorm";
import { GiftsRepository } from "../repositories/GiftsRepository";

class GetGiftDataService {
  async getData(id: string) {
    const giftsRepository = getCustomRepository(GiftsRepository);

    const gift = await giftsRepository.findOne(id);

    return gift;
  }
}

export { GetGiftDataService };