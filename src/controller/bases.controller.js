
import pg from '../db/index.js';


class BaseController {

    async create(req, res) {
        try {
            const tableName = req.params.table;
            const body = req.body;
            const values = Object.values(body);
            const keys = Object.keys(body);
            const belgi = values.map((itm, index) => `$${index + 1}`).join(",")
            // insert into users (name,email) values ($1,$2) ,["daniyorbek","dnoiyor@gmail.com"]
            const sorov = `
            INSERT INTO ${tableName}
            (${keys.join(",")}) VALUES (${belgi})
            RETURNING *`

            const natija = await pg.query(sorov, values)
            const data = natija.rows[0];

            return res.status(201).json({
                statuCode: 201,
                message: "success",
                data
            })
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error
            })
        }
    }


    async getAll(req, res) {
        try {
            const tableName = req.params.table
            const sorov = `SELECT * FROM ${tableName}`
            const natija = await pg.query(sorov)

            return res.status(200).json({
                statuCode: 200,
                message: "success",
                data: natija.rows
            })
        } catch (error) {
            return res.status(500).json({
                statusCode: 201,
                message: error
            })
        }
    }


    async getById(req, res) {
        try {
            const tableName = req.params.table;
            const id = req.params.id;
            const sorov = `
            SELECT * FROM  ${tableName}
            WHERE id= ${id}`

            const natija = await pg.query(sorov)
            const data = natija.rows[0];

            return res.status(200).json({
                statuCode: 200,
                message: "success",
                data
            })
        } catch (error) {
            return res.status(500).json({
                statusCode: 201,
                message: error
            })
        }
    }


    async update(req, res) {
        try {
            const tableName = req.params.table;
            const id = req.params.id;
            const body = req.body;
            const values = Object.values(body);
            const keys = Object.keys(body);
            const belgii = keys.map((itm, index) => `${itm}=($${index + 1})`).join(",")
            console.log(belgii)

            const sorov = `
            UPDATE ${tableName}
           SET  ${belgii} WHERE ID=${id}
           RETURNING *`

            const natija = await pg.query(sorov, values)
            return res.status(200).json({
                statuCode: 200,
                message: "success",
                data: natija.rows[0]
            })
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error
            })
        }
    }


    async deletee(req, res) {
        try {
            const tableName = req.params.table;
            const id = req.body.id;

            const sorov = `
            DELETE  FROM  ${tableName}
            WHERE id= ${id}`

            await pg.query(sorov)

            return res.status(200).json({
                statuCode: 200,
                message: "success",
                data: {}
            })

        } catch (error) {
            return res.status(500).json({
                statusCode: 201,
                message: error
            })
        }
    }

}


export default  BaseController;


// git init && git remote add origin <remote-repo-url> && 
// git remote -v && git add . && git commit -m 'matn' && 
// git checkout -b 'branch-nomi' && git push -u origin 'branch-nomi'
