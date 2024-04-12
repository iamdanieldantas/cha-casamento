import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { Gift } from "../entities/Gift";
import { GiftsRepository } from "../repositories/GiftsRepository";
import { UpdateGiftService } from "./UpdateGiftService";

interface IUser {
  username: string;
  email: string;
  telefone: string;
  gift_id: string;
}

class CreateUserService {
  async create({ gift_id, username, email, telefone }: IUser) {
    if (!username) {
      throw new Error("Por favor preencha o nome do convidado");
    }

    const usersRepository = getCustomRepository(UsersRepository);
    const updateGiftService = new UpdateGiftService();

    const usernameAlreadyExists = await usersRepository.findOne({ username });

    if (usernameAlreadyExists) {
      throw new Error("Username já está cadastrado");
    }

    const emailAlreadyExists = await usersRepository.findOne({ email });

    if (emailAlreadyExists) {
      throw new Error("Email já está cadastrado");
    }

    const user = usersRepository.create({ gift_id, username, email, telefone });
    await usersRepository.save(user);

    if(gift_id)
      await updateGiftService.setGiftToUnavailable(gift_id);

    return user;
  }
}

export { CreateUserService };