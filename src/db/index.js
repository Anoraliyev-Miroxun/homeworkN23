import {Pool} from 'pg';


const pg=new Pool({
    connectionString:"postgres://miroxunbek:7777@localhost/testdb"
})


export default pg;