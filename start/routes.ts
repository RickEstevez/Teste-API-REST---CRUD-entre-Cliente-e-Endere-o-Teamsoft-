import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.get("/clients", "ClientsController.index");
  Route.get("/clients/:id", "ClientsController.show");
  Route.post("/clients", "ClientsController.store");
  Route.patch("/clients/:id", "ClientsController.update");
  Route.delete("/clients/:id", "ClientsController.destroy");

  Route.resource(
    "/clients/:clientId/addresses",
    "AddressesController"
  ).apiOnly();
});
