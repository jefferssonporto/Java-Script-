const express = require("express");
const server = express();

server.get("/hello", (req, res) => { //Sempre que bater na rota hello e ela for do tipo GET, eu vou responder alguma coisa
    return res.json({ 
        title: "Hello World",
        message: "Olá meu amigo tudo bem !? "
    });     // Resposta          
});  

server.listen(3000); // Porta que eu quero trabalhar
// Normalmente utiliza-se as portas 3000  5000  8000  8080
