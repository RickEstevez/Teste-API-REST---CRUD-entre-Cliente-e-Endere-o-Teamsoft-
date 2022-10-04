import Logger from "@ioc:Adonis/Core/Logger";
import HttpExceptionHandler from "@ioc:Adonis/Core/HttpExceptionHandler";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor() {
    super(Logger);
  }

  public async handle(error: any, ctx: HttpContextContract) {
    if (error.code === "E_VALIDATION_FAILURE") {
      return ctx.response.status(422).send(error.messages);
    }

    return super.handle(error, ctx);
  }
}
