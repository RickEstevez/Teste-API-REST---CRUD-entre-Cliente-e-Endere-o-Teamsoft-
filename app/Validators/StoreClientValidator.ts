import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class StoreClientValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    cnpj: schema.string([
      rules.unique({ table: "clients", column: "cnpj" }),
      rules.required(),
    ]),
    corporate_name: schema.string([rules.required()]),
    name: schema.string([rules.required()]),
    telephone: schema.string([rules.required()]),
  });

  public messages: CustomMessages = {
    "client.CNPJ.required": "CNPJ is required",
    "client.corporate_name.required": "corporate_name is required",
    "client.name.required": "name is required",
    "client.telephone.required": "telephone is required",
  };
}
