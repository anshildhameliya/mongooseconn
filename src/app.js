const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/nodedb", { useNewUrlParser: true }, { useUnifiedTopology: true })
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));


    // CREATE A Schema
const playlistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})


//  create a collection 
const Playlist = new mongoose.model("Playlist",playlistSchema);


// create a document or insert

const createDocument = async() =>{

    const reactplaylist = new Playlist({
        name: "React Js",
        ctype: "Front-end",
        author: "anshil",
        active: true,
    })

    const result = await reactplaylist.save();
    console.log(result);
   
}

createDocument();