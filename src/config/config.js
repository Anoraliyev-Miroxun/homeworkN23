import {config} from 'dotenv';

config();

export const configEnv={
    port:String(process.env.PORT),
    db:{
        port_db:String(process.env.PG_PORT),
        user:String(process.env.PG_USER),
        pass:String(process.env.PG_PASS),
        host:String(process.env.PG_HOST),
        db:String(process.env.PG_DB)
    }
}

// PORT=7777


// PG_USER=miroxunbek
// PG_PASS=7777
// PG_HOST=localhost
// PG_PORT=5432
// PG_DB=testdb
