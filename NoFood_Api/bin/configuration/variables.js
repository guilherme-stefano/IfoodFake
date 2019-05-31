const variables ={
    Api:{
        port: process.env.port || 3000
    },
    Database:{
        connection:process.env.connection || 'mongodb+srv://root:root@cluster0-kjocf.mongodb.net/nofood?retryWrites=true&w=majority'
    }
}

module.exports = variables;