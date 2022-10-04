import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Client from "./Client";

export default class Address extends BaseModel {
  @belongsTo(() => Client)
  public client: BelongsTo<typeof Client>;

  @column({ isPrimary: true })
  public id: number;

  @column()
  public clientId: number;

  @column()
  public cep: string;

  @column()
  public public_place: string;

  @column()
  public number: number;

  @column()
  public complement: string;

  @column()
  public district: string;

  @column()
  public city: string;

  @column()
  public state: string;

  @column()
  public latitude: string;

  @column()
  public longitude: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
