import {validateAll, validateToken} from "../middleware/validator";

const memberCardRoute = require("express").Router();
import {cardSet,getSingle} from "../controller/memberCard.controller";
import {hasAnyPermit} from "../middleware/permitValidator";
import {createMemberCard} from "../schema/schema";

memberCardRoute.post("/",validateAll(createMemberCard), cardSet)
memberCardRoute.get("/:nfc_id",getSingle)

export default memberCardRoute