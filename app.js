const express = require('express'); // importei o express

const app = express(); // executo a função express

const User = require('./models/User'); // ele acessou o caminho informado e foi buscar a const User na pagina "user.js" para aproveita-la aqui.

app.use(express.json()); // avisar que a aplicação deve receber os dados em formato json.

// Essa roda do tipo "Get" posso acessar pelo Navegador nesse caso. v

app.get("/", async (req, res) => {
    res.send("Página inicial celke");
});  // criando a rota raiz tipo get

// Essa roda do tipo "post" só posso acessar pelo insomnia nesse exemplo aqui. essa rota aqui vai cadastrar registros no banco de dados. v

app.post("/cadastrar", async (req, res) => {
    //console.log(req.body);

    await User.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso."

        }) // < se o Erro não acontecer o usuário será cadastrado com sucesso.

    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário não cadastrado com sucesso."
        }) // < se o Erro acontecer dará erro e o usuário não será cadastrado.

    });

    res.send("Página cadastrar");
});  // rota do tipo post

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
}) // para rodar o projeto