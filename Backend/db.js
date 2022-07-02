const mongoose =  require('mongoose');
const  mongouri = "mongodb+srv://Mohammed:Pjrt!FerpQ-5iv2@cluster0.s6cndss.mongodb.net/inotebook"

const connectomongo = ()=>{
          mongoose.connect(mongouri,()=>{
                    console.log("Connect To mongodb Successfully");
          })

}
module.exports = connectomongo;