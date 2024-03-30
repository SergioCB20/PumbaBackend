import {Router} from "express"
import promotionsControllers from "../controllers/promotions.controllers.js" 

const router = Router();

//Controladores de usuario y lo relacionado al mismo

router.get("/",promotionsControllers.getPromotions);
export default router;