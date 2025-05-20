const express= require('express');
const fs= require('fs');
const path= require('path');
const cors= require('cors');
require('dotenv').config();
const app= express();

const PORT= process.env.PORT;

app.use(cors());
// app.get('/', (req, res)=>{
//     res.send('Active');
// })

app.get('/download/:fileName', (req, res)=>{
    const { fileName }= req.params;
    const filePath= path.join(__dirname, 'files', fileName);

    if(!fs.existsSync(filePath)){
        return res.status(400).json({message: "No file Found for Downloading"});
    }

    console.log(`Attempting to Download from path: ${filePath}`);

    res.download(filePath, fileName, (err)=>{
        if(err){
            console.log(err);
            return res.status(500).json({err, message: "Issue in Downloading File!"});
        }

        console.log("Download Completed: " + fileName);
    })
})

app.listen(PORT, ()=>{
    console.log(`Port is Running at: http://localhost:${PORT}`);
})