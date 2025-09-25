import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field()
  title:string;

  @Field(()=>User,{nullable:true})
  user?:User[]
}



// model Post{
//   id Int @id @default(autoincrement())
//   title String
//   userId Int 
//   user User @relation(fields: [userId],references: [id])
// }