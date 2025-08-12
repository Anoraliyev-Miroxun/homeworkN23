import { Pool } from "pg";

const db = new Pool({
    connectionString: 'postgres://miroxunbek:7777@localhost:5432/testdb'
});

db.on('error', (err) => {
    console.log('Error on connecting to the database:', err);
    process.exit(1);
});

export default db;