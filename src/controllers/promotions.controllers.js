import methods from "../repository/base.js";

const table = "promotions";

const getPromotions = async (req,res)=>{
    const result = await methods.getAll(req,res,table);
    result?res.json(result):res.status(500);
}

export default {
    getPromotions
}