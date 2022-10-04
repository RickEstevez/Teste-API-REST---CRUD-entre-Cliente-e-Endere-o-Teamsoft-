import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";
import StoreClientValidator from "App/Validators/StoreClientValidator";

import Client from "App/Models/Client";

export default class ClientsController {
  public async store({ request, response }: HttpContextContract) {
    const trx = await Database.transaction();
    const data = await request.validate(StoreClientValidator);

    try {
      const client = await Client.create(data);

      await trx.commit();
      return response.status(201).send(client);
    } catch (error) {
      await trx.rollback();
      return response.status(500).send({ error: error.message });
    }
  }

  public async index({ response }: HttpContextContract) {
    try {
      const client = await Client.query().preload("addresses");

      return response.status(200).send(client);
    } catch (error) {
      return response.status(500).send({ error: error.message });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const client = await Client.findOrFail(params.id);

      await client.load("addresses");

      return response.status(200).send(client);
    } catch (error) {
      return response.status(500).send({ error: error.message });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    const trx = await Database.transaction();
    try {
      const client = await Client.findOrFail(params.id);

      await client.delete();

      await trx.commit();
      return response.status(200).send(client);
    } catch (error) {
      await trx.rollback();
      return response.status(500).send({ error: error.message });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    const trx = await Database.transaction();
    try {
      const client = await Client.findOrFail(params.id);

      const data = request.only([
        "cnpj",
        "corporate_name",
        "name",
        "telephone",
      ]);

      client.merge(data);

      await client.save();

      await trx.commit();
      return response.status(200).send(client);
    } catch (error) {
      await trx.rollback();
      return response.status(500).send({ error: error.message });
    }
  }
}
