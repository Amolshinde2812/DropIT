require('dotenv').config();
const mongoose = require('mongoose');



// function connectDB() {
//     // Database connection 
//     mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
//     const connection = mongoose.connection;
//     connection.once('open', () => {
//         console.log('Database connected ');
//     }).catch(err => {
//         console.log('Connection failed');
//     });
// }


const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_CONNECTION_URL, {
        // useUnifiedTopology: true, <-- no longer necessary
        // useNewUrlParser: true, <-- no longer necessary
        // useCreateIndex: true, <-- no longer necessary
      });
      console.log(`MongoDB connected :${conn.connection.host}`);
    } catch (error) {
      console.error(`error${error}`);
      process.exit(1);
    }
  };

  
module.exports = connectDB;


