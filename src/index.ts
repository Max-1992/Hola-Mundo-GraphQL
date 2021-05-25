import express from 'express'
import compression from 'compression'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema'

const app = express()

app.use(cors())
app.use(compression())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))

const port = 5000
app.listen(port, () => console.log(`Server runinig in http://localhost:${port}`) )