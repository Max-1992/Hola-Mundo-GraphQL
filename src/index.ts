// Server
import express from 'express'
import { createServer } from 'http'

// Middlewares
import compression from 'compression'
import cors from 'cors'

// GraphQL
import { ApolloServer } from 'apollo-server-express'
import schema from './schema'

const app = express()

app.use(cors())
app.use(compression())

const server = new ApolloServer({
    schema,
    introspection: true
})

server.applyMiddleware({ app })
const httpServer = createServer(app)

const port = 5000
httpServer.listen(port, () => console.log(`Server runinig in http://localhost:${port}`) )