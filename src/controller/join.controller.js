import BaseController from './bases.controller.js';
import pg from '../db/index.js';

class JoinController extends BaseController{
    async join (req,res){
        try {
            const query=`
            SELECT * FROM USERS
            LEFT JOIN  ORDERS
            ON  USERS.ID=ORDERS.CUSTOMER_ID`
            
            const data=await pg.query(query);
            const natija=data.rows;
            return res.status(200).json({
                statusCode:200,
                message:"success",
                data:natija
            })
        } catch (error) {
            return res.status(500).json({
                statusCode:500,
                message:error
            })
        }
    }
    
}

export default new JoinController();