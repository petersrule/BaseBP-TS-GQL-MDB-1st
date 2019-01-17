import { Typegoose, prop } from "typegoose";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class User extends Typegoose {
  @Field()
  @prop({
    required: true,
    minlength: 4,
    maxlength: 40,
    unique: true
  })
  username!: string;

  @Field()
  @prop({
    required: true,
    minlength: 6,
    maxlength: 255,
    unique: true
  })
  email!: string;

  @Field()
  @prop({
    required: true,
    minlength: 10,
    maxlength: 1024
  })
  password!: string;
}

export const UserModel = new User().getModelForClass(User);
