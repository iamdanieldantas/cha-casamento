import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { GiftsRepository } from "../repositories/GiftsRepository";

class ListUsersService {
  async list() {
    const usersRepository = getCustomRepository(UsersRepository);
    const giftsRepository = getCustomRepository(GiftsRepository);

    const users = await usersRepository.find();

    users.forEach(async function(user, index) {
      users[index].gift = await giftsRepository.findOne(user.gift_id);
    });

    return users;
  }
}

export { ListUsersService };