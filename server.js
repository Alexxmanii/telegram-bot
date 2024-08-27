import express from "express";
const app =express();
app.use(express.json());
app.post("/message",(req,res)=>{
    res.status(200).send("Message received");
});

app.all("/message", (req,res)=>{
 res.status(405).send("Method not Allowed");
});

const PORT =3006;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});