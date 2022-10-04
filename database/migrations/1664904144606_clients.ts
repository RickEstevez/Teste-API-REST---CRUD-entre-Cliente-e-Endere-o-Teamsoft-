import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "clients";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary().unique().notNullable();
      table.string("cnpj", 15).unique().notNullable();
      table.string("corporate_name", 50).notNullable();
      table.string("name", 100).notNullable();
      table.string("telephone", 15).notNullable();
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
