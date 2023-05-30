const mongoose = require('mongoose');
async function connect (){
    try{
        await mongoose.connect('mongodb+srv://project-nodejs:Taodayne123@nmt.nfr6jtj.mongodb.net/?retryWrites=true&w=majority');
        console.log('Connect succesfully!!! ')
    }catch(error){
        console.log('Connect failure!!! ')
        
    }
}

module.exports = { connect}
