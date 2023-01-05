import { Router } from "express";
import { UserService } from "../services/user.service";

const router: Router = Router();

router.get("/:id", new UserService().GetOne);
router.get("/",    new UserService().GetAll);
router.post("/",   new UserService().Create);
router.post("/",   new UserService().login);
router.put("/:id", new UserService().updateOne);
router.delete("/", new UserService().DeleteOne);
export { router };  


