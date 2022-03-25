module.exports = function (run_express) {


    let conexao = require("../config/bd") ()



    run_express.get("/", async function (req,res) {
        let documentos = await modelo.find() 

       res.render("index.ejs",{dados:documentos})
    })

    run_express.post("/", function (req, res) {
        let modelo =require("../modelos/post")

        let documentos = new modelo({
            username:req.body.username,
            email:req.body.email,
            comentario:req.body.comentario,
        })
        .save()
        .then(function () {
            res.redirect("/")
        })
        .catch(function () {
            res.send(`Não foi possível gravar os dados. \n usename:${req.body.username} \n email:${req.body.email} \n comentario:${req.body.comentario} \n data:${Date.now}`)
        })
    })

}