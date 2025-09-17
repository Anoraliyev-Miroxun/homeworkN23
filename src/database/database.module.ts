import { Module } from "@nestjs/common";
import { hostname } from "os";
import {Pool} from 'pg';
import { popResultSelector } from "rxjs/internal/util/args";
import { CategoryModule } from "src/category/category.module";
import { ProductModule } from "src/product/product.module";
import { UserModule } from "src/user/user.module";

const  pool=new Pool({
    host:'localhost',
    port:5432,
    user:"miroxunbek",
    possword:"7777",
    database:"birinchidars",
    max:10 
});


@Module({
    imports:[UserModule,CategoryModule,ProductModule],
    providers:[
        {
            provide:"PG_POOL",
            useValue:pool
        },
    ],
    exports:["PG_POOL"]

})



export class DatabaseModule{}