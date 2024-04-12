import { getCustomRepository } from "typeorm";
import { GiftsRepository } from "../repositories/GiftsRepository";
import { Gift } from "../entities/Gift";

class DeleteGiftService {
  async delete(id: string) {
    const giftsRepository = getCustomRepository(GiftsRepository);

    const gift = await giftsRepository
      .createQueryBuilder()
      .delete()
      .from(Gift)
      .where("id = :id", { id })
      .execute();

    return gift;
  }
}

export { DeleteGiftService };