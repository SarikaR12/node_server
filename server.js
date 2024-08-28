let http = require('http')
let express = require("express")
let app = express()
app.use(express.json());

app.get("/index", (req, res) => {
    console.log(req);
    res.status(200).json({
        message: "this is a index page"
    })
});


app.get("/home", (req, res) => {
    console.log(req);
    res.status(200).json({
        message: "this is a home page"
    })
});


app.get("/about", (req, res) => {
    console.log(req);
    res.status(200).json({
        message: "this is a about page"
    })
});


app.get("/product", (req, res) => {
    console.log(req);
    res.status(200).json({
        message: "this is a product page"
    })
});


app.get("/contact", (req, res) => {
    console.log(req);
    res.status(200).json({
        message: "this is a contact page"
    })
});


http.createServer(app).listen(3002, () => {
    console.log(`server start on ${3002}`);

})