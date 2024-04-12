import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { GiftsRepository } from "../repositories/GiftsRepository";

class GetUserDataService {
  async getData(id: string) {
    const usersRepository = getCustomRepository(UsersRepository);
    const giftsRepository = getCustomRepository(GiftsRepository);

    const user = await usersRepository.findOne(id);
    
    if(!user.gift_id){
      const gift = await giftsRepository.findOne(user.gift_id);     
      user.gift = gift
    }

    return user;
  }
}

export { GetUserDataService };