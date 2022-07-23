const mongoose =  require('mongoose');
require('dotenv').config();

const api_key = process.env.API_KEY
const  mongouri = `mongodb+srv://Mohammed:${api_key}.s6cndss.mongodb.net/inotebook`
const connectomongo = ()=>{
          mongoose.connect(mongouri,()=>{
                    console.log("Connect To mongodb Successfully");
          })

}
module.exports = connectomongo;