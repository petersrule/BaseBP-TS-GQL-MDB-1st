import { User, UserModel } from "../models/User";
import bcrypt from "bcryptjs";
import { Query, Mutation, Arg } from "type-graphql";

export const resolver = () => "test";
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return "Hello World";
  }

  @Mutation(() => String)
  async register(
    @Arg("username") username: string,
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await new UserModel({
      username,
      email,
      password: hashedPassword
    }).save();

    return user;
  }
}
