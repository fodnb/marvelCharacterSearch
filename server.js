let express = require('express');
let app = express();

app.get("/", (req, res)=>{
    res.send('hi');
})

app.listen(4000, ()=>{
    console.log('listening on 4000');
});