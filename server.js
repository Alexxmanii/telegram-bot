import express from "express";
const app =express();
app.use(express.json());
import TelegramBot from "node-telegram-bot-api";
const token = "7034264368:AAHppCL7oBA_Dj3vKLkVVM7Mj_kU5PMkRzw";
const bot = new TelegramBot(token, {polling:true}); 

app.post("/message",(req,res)=>{
    res.status(200).send("Message received");
});

app.all("/message", (req,res)=>{
 res.status(405).send("Method not Allowed");
});
bot.on("message",(msg)=>{
    const chatId = msg.chat.id;
    const text = msg.text;
    console.log(`Received message from ${chatId}: ${text}`);
    //-----send a message back to chat---------
    bot.sendMessage(chatId,`you said ${text}`);
})
const PORT =3006;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});