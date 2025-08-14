import {AppError} from '../error/AppError.js';
import {topTable} from '../utils/find-table-name.js';




export class BaseController{
   async  create(req,res,next){
    try {
        const tableName=topTable(req.params.table);
        const data=await tableName.create(req.body);
        return res.status(201).json({
            statusCode:201,
            message:"success",
            data
        });
    } catch (error) {
        next(error)
    }
   }


   async  getAll(req,res,next){
    try {
        const tableName=topTable(req.params.table);
        const data=await tableName.findAll({include:{all:true,nested:true}});
        return res.status(200).json({
            statusCode:200,
            message:"success",
            data
        })
    } catch (error) {
        next(error)
    }
   }


   async  getById(req,res,next){
    try {
        const tableName=topTable(req.params.table);
        const data=await tableName.findByPk(req.params.id,{include:{all:true ,nested:true}});
        if(!data){
            throw new AppError("user not found",404)
        }
        return res.status(200).json({
            statusCode:200,
            message:"success",
            data
        })
    } catch (error) {
        next(error)
    }
   }


   async  update(req,res,next){
    try {
        const tableName=topTable(req.params.table);
        const data=await tableName.update(req.body,{where:{id:req.params.id},returning:true});
        if(data[0]===0){
            throw new AppError("user not found",404)
        }
        return res.status(200).json({
            statusCode:200,
            message:"success",
            data:data[1][0]
        })
    } catch (error) {
        next(error)
    }
   }



   async  delete(req,res,next){
    try {
        const tableName=topTable(req.params.table);
        const data=await tableName.destroy({where:{id:req.params.id}});
        if(!data){
            throw new AppError("user not found",404)
        }

        return res.status(200).json({
            statusCode:200,
            message:"success",
            data:{}
        })
    } catch (error) {
        next(error)
    }
   }
}



export default new BaseController();
