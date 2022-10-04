import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class StoreAddressValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    client_id: schema.number([rules.required()]),
    cep: schema.string([
      rules.unique({ table: "addresses", column: "cep" }),
      rules.required(),
    ]),
    public_place: schema.string([rules.required()]),
    number: schema.number([rules.required()]),
    complement: schema.string(),
    district: schema.string([rules.required()]),
    city: schema.string([rules.required()]),
    state: schema.string([rules.required()]),
    latitude: schema.string(),
    longitude: schema.string(),
  });

  public messages: CustomMessages = {
    "address.client_id.required": "client_id is required",
    "address.CEP.required": "CEP is required",
    "address.public_place.required": "public_place is required",
    "address.number.required": "number is required",
    "address.district.required": "district is required",
    "address.city.required": "city is required",
    "address.state.required": "state is required",
  };
}
