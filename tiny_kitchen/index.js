import express from "express"

const app = express();

app.use(express.json());

app.get("/", (req,res) => res.send("Hello Worlds"))

const mutiply = () => {
    return 2*2
}
gew
app.get("/test2", (req, res) => {
    res.send(`${mutiply()}`)
})

const port = process.env.PORT || 5001;
const cb = () => console.log(`server is running on ${port}`);

app.listen(port, cb) //takes two arguements, the port number & a callback