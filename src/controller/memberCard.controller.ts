import { Request, Response, NextFunction } from "express";
import fMsg from "../utils/helper";
import memberCardModel from "../model/memberCard.model";
export  const cardSet = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const result = await new memberCardModel(req.body).save()
    fMsg(res,"success", result)
};

export  const getSingle = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let id = req.params.nfc_id;
    const result = await  memberCardModel.findOne({nfc_id: id})
    fMsg(res,"success", result)
};


