import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  full_name:string;

  @Field()
  email:string;

  @Field(()=>[Post],{nullable:true})
  posts?:Post[]
}


