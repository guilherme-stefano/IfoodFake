const variables ={
    Api:{
        port: process.env.port || 4000
    },
    Database:{
        connection:process.env.connection || 'mongodb+srv://root:root@cluster0-kjocf.mongodb.net/nofood?retryWrites=true&w=majority'
    },
    Security: {
        secretKey: '814e5863d63e463529cadfc13fa1458e|44a7551117c0b7fbc89b908101b44a03'
    }
}

module.exports = variables;