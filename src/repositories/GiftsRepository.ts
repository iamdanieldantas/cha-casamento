import { Repository, EntityRepository } from "typeorm";
import { Gift } from "../entities/Gift";

@EntityRepository(Gift)
class GiftsRepository extends Repository<Gift>{ }

export { GiftsRepository };