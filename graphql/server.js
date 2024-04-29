import express from "express"
import cors from "cors"

import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express4"
import { resolvers } from './graphql/resolvers.js'
import { typeDefs } from './graphql/typeDefs.js'
import { db } from "./models/index.js"
const PORT = process.env.PORT || 8000;

(async () => {
    const app = express();

    app.use(express.json());
    app.use(cors())

    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    await server.start();

    app.use('/graphql', expressMiddleware(server, { context: async () => ({ db }) }));

    app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}/graphql`));
})()