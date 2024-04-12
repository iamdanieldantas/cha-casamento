import { getCustomRepository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";
import { GiftsRepository } from "../repositories/GiftsRepository";
import { Gift } from "../entities/Gift";
import { UpdateGiftService } from "./UpdateGiftService";

interface IUser {
  id: string
  gift_id: string;
  username: string;
  email: string;
  telefone: string;
}

class UpdateUserService {
  async update({ id, gift_id, username, email, telefone }: IUser) {
    const usersRepository = getCustomRepository(UsersRepository);
    const updateGiftService = new UpdateGiftService();

    const user = await usersRepository
      .createQueryBuilder()
      .update(User)
      .set({ gift_id, username, email, telefone })
      .where("id = :id", { id })
      .execute();

    if(gift_id)
      await updateGiftService.setGiftToUnavailable(gift_id);

    return user;

  }
}

export { UpdateUserService };