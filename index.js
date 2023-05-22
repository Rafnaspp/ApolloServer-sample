const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
require('dotenv').config();


const mongodbUrl = process.env.MONGODB;

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(mongodbUrl, {useNewUrlParser:true})
   .then(()=> {
    console.log("conection succses full");
    return server.listen({port:5000})
   })
   .then((res)=> {
    console.log(`server running at ${res.url}`)
   })