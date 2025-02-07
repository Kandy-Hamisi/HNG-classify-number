import { Router } from 'express';
import {getNumberClassification} from "../controllers/numberController";
const router = Router();

router.route("/classify-number").get(getNumberClassification);

export default router;