import { DateTime } from "luxon";
import { BaseModel, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import Address from "./Address";

export default class Client extends BaseModel {
  @hasMany(() => Address)
  public addresses: HasMany<typeof Address>;

  @column({ isPrimary: true })
  public id: number;

  @column()
  public cnpj: string;

  @column()
  public corporate_name: string;

  @column()
  public name: string;

  @column()
  public telephone: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
