import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";
import StoreAddressValidator from "App/Validators/StoreAddressValidator";

import Address from "App/Models/Address";
import Client from "App/Models/Client";

export default class AddressesController {
  public async store({ request, params, response }: HttpContextContract) {
    const trx = await Database.transaction();
    const data = await request.validate(StoreAddressValidator);

    try {
      const body = request.body();
      const clientId = params.clientId;

      await Client.findOrFail(clientId);

      body.clientId = clientId;

      const address = await Address.create(data);

      await trx.commit();
      return response.status(201).send(address);
    } catch (error) {
      await trx.rollback();
      return response.status(500).send({ error: error.message });
    }
  }

  public async index({ response }: HttpContextContract) {
    const trx = await Database.transaction();
    try {
      const address = await Address.query().preload("client");

      await trx.commit();
      return response.status(200).send(address);
    } catch (error) {
      await trx.rollback();
      return response.status(500).send({ error: error.message });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    const trx = await Database.transaction();
    try {
      const address = await Address.findOrFail(params.id);

      await address.load("client");

      await trx.commit();
      return response.status(200).send(address);
    } catch (error) {
      await trx.rollback();
      return response.status(500).send({ error: error.message });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    const trx = await Database.transaction();
    try {
      const address = await Address.findOrFail(params.id);

      await address.delete();

      await trx.commit();
      return response.status(200).send(address);
    } catch (error) {
      await trx.rollback();
      return response.status(500).send({ error: error.message });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    const trx = await Database.transaction();

    try {
      const address = await Address.findOrFail(params.id);

      const data = request.only([
        "client_id",
        "cep",
        "public_place",
        "number",
        "complement",
        "district",
        "city",
        "state",
      ]);

      address.merge(data);

      await address.save();

      await trx.commit();
      return response.status(200).send(address);
    } catch (error) {
      await trx.rollback();
      return response.status(500).send({ error: error.message });
    }
  }
}
