import fastify from "fastify";

const serverApp = fastify();

serverApp.get("/teste", () => {
  return "Hello World";
});

serverApp.listen({ port: 3333 }).then(() => {
  console.log("Server is running on port 3333");
});
