import db from '../db/server.js';

class TableService {
    async create(body,tableName) {
        
        const columns = Object.keys(body).join(', ');
        const rows = Object.values(body);
        const values = rows.map((_, i) => `$${i + 1}`);
        const query = `INSERT INTO ${tableName} (${columns}) VALUES (${values}) RETURNING *`;
        const result = await db.query(query, rows);
        return result.rows[0];
    }

    async findAll(tableName) {
        const result = await db.query(`SELECT * FROM ${tableName}  ORDER BY ID ASC`);
        return result.rows;
    }

    async findById(id,tableName) {
        const result = await db.query(`SELECT * FROM ${tableName}  WHERE id = $1`, [id]);
        return result.rows[0];
    }

    async findOne(key, value,tableName) {
        const result = await db.query(`SELECT * FROM ${tableName}  WHERE ${key} = $1`, [value]);
        return result.rows[0];
    }

    async update(id, body,tableName) {
        let query = `UPDATE ${tableName} SET `;
        const keys = Object.keys(body);
        const rows = Object.values(body);
        for (let i = 0; i < keys.length; i++) {
            if (i == keys.length - 1) {
                query += `${keys[i]} = $${i + 1} `;
            } else {
                query += `${keys[i]} = $${i + 1}, `;
            }
        }
        query += `WHERE id = ${id} RETURNING *`;
        const result = await db.query(query, rows);
        return result.rows[0];
    }

    async delete(id,tableName) {
        const result = await db.query(`DELETE FROM ${tableName}  WHERE id = $1 RETURNING *`, [id]);
        return result.rows[0];
    }
}

export default new TableService();





git init && git remote add origin <remote-repo-url>
\ && git remote -v && git add . && git commit -m 'matn' 
&& git checkout -b 'branch-nomi' && git push -u origin 'branch-nomi'
