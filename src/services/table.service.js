import db from '../db/index.js';

class UnversalService{
    async create(body,tableName){
        const kalit=Object.keys(body).join(", ");
        const valuess=Object.values(body);
        const dollar=valuess.map((v,i)=>`$${i+1}`).join(", ");
        const sorov=`INSERT INTO ${tableName} (${kalit})
                    VALUES  (${dollar}) RETURNING *`

        const {rows}=await db.query(sorov,valuess);
        return rows[0];
    }


    async getAll(tableName){
        const {rows}=await db.query(`SELECT * FROM ${tableName}`);
        return rows;
    }


    async getById(id,tableName){
        const {rows}=await db.query(`SELECT * FROM ${tableName} WHERE ID=($1)`,[id]);
        return rows[0];
    }


    async update(body,id,tableName){
        const kalit=Object.keys(body);
        const dollar=kalit.map((v,i)=>`${v}=$${i+1}`).join(", ");
        const sorov=`UPDATE ${tableName} SET ${dollar} WHERE ID = $${kalit.length+1} RETURNING *`;
        const qiymatlar=[...Object.values(body),Number(id)];
        const {rows}=await db.query(sorov,qiymatlar);
        return rows[0];
    }


    async delete(tableName,id){
        const {rows}=await db.query(`DELETE FROM ${tableName} WHERE ID = $1 RETURNING *`,[id])
        return rows[0];
    }
}


export default new UnversalService();