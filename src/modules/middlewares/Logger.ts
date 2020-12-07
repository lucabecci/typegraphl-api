import { MyContext } from "src/types/MyContext";
import { MiddlewareFn } from "type-graphql";

export const logger: MiddlewareFn<MyContext> = async ({ context }, next) => {
  console.log("userID logged:", context.req.session.userId);

  return next();
};
