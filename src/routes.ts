import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { GetUserDataController } from "./controllers/GetUserDataController";
import { ListUsersController } from "./controllers/ListUsersController";
import { SearchUserController } from "./controllers/SearchUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { ListGiftsController } from "./controllers/ListGiftsController";
import { CreateGiftController } from "./controllers/CreateGiftController";
import { DeleteGiftController } from "./controllers/DeleteGiftController";
import { UpdateGiftController } from "./controllers/UpdateGiftController";
import { GetGiftDataController } from "./controllers/GetGiftDataController";

const router = Router();

const createUserController = new CreateUserController();
const createGiftController = new CreateGiftController();

const searchUserController = new SearchUserController();

const updateUserController = new UpdateUserController();
const updateGiftController = new UpdateGiftController();

const deleteUserController = new DeleteUserController();
const deleteGiftController = new DeleteGiftController();

const listUsersController = new ListUsersController();
const listGiftsController = new ListGiftsController();

const getUserDataController = new GetUserDataController();
const getGiftDataController = new GetGiftDataController();

router.get("/", listUsersController.handle);

router.get("/convidados", listGiftsController.handleConvidados);

router.get("/gifts", listGiftsController.handle);

router.get("/add", listGiftsController.handle);

router.get("/add-gift", (request, response) => {
  response.render("add-gift");
});

router.post("/add-user", createUserController.handle);
router.post("/add-presente", createGiftController.handle);

router.get("/search", searchUserController.handle);

router.get("/edit", getUserDataController.handle);
router.get("/edit-presente", getGiftDataController.handle);

router.post("/edit-user", updateUserController.handle);
router.post("/edit-presente", updateGiftController.handle);

router.post("/delete-user", deleteUserController.handle);
router.post("/delete-presente", deleteGiftController.handle);

export { router };
