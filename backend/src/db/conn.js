const mongoose  = require('mongoose');
mongoose.connect('mongodb://Devansh-1007:Devansh@cluster0-shard-00-00.oocje.mongodb.net:27017,cluster0-shard-00-01.oocje.mongodb.net:27017,cluster0-shard-00-02.oocje.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-kd7jb2-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Success');
}).catch((err)=>{
    console.log(err);
})