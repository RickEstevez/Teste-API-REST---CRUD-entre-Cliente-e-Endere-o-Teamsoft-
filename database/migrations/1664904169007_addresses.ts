import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "addresses";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary().unique().notNullable();
      table
        .integer("client_id")
        .unsigned()
        .references("id")
        .inTable("clients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("cep", 8).unique().notNullable();
      table.string("public_place", 50).notNullable();
      table.integer("number", 5).notNullable();
      table.string("complement", 50);
      table.string("district", 50).notNullable();
      table.string("city", 30).notNullable();
      table.string("state", 30).notNullable();
      table.string("latitude");
      table.string("longitude");
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
