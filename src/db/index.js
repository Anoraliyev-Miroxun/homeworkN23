import { Pool } from 'pg';

const db=new Pool({
    connectionString:"postgres://miroxunbek:7777@localhost:5432/testdb"

})

export default db;