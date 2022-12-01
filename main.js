const data = require("./db.js");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);


// CRUD --> Create, Read, Update, Delete

// Retorna uma Refeição
server.get('/hamburguer/:index', (req, res) => {
    const { index } = req.params

    return res.json(pratos[index])
});

// Retornar todas as refeições
server.get('/hamburguer', (req, res) => {

    return res.json(pratos)
});

// Criar uma nova 
server.post('/hamburguer', (req, res) => {
    const { name } = req.body;
    bebidas.push(name);

    return res.json(bebidas);
});

// Atualizar um curso
server.put('/hamburguer/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    pratos[index] = name;

    return res.json(pratos);
});

// Deletar um curso
server.delete('/hamburguer/:index', (req, res) => {
    const { index } = req.params;

    data.splice(index, 1);
    return res.json({ message: "O hambueguer foi deletado" });
})


server.delete("/hamburguer/:index", (req, res) => {
    const comida = comida.deleteOne({ _id: req.params.id }, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: bebidas não foi apagada com sucesso!"
        });
        return res.json({
            error: false,
            message: "bebidas apagado com sucesso!"
        });
    });
});



server.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`);
});