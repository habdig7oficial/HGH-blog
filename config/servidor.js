/*Copyright © 2022 Mateus Felipe da Silveira Vieira */


/*

    Este arquivo é parte do programa HGH-blog

    HGH-blog é um software livre; você pode redistribuí-lo e/ou
    modificá-lo dentro dos termos da Licença Pública Geral Affero GNU como
    publicada pela Free Software Foundation (FSF); na versão 3 da
    Licença, ou qualquer versão posterior.

    HGH-blog é distribuído na esperança de que possa ser útil,
    mas SEM NENHUMA GARANTIA; sem uma garantia implícita de ADEQUAÇÃO
    a qualquer MERCADO ou APLICAÇÃO EM PARTICULAR. Veja a
    Licença Pública Geral Affero GNU para maiores detalhes.

    Você deve ter recebido uma cópia da Licença Pública Geral Affero GNU junto
    com este programa, Se não, veja <http://www.gnu.org/licenses/>.

*/

const express = require("express")
const run_express = express()

run_express.use(express.urlencoded({ extended: false }))
run_express.use(express.static("./assets/"))
run_express.set("views","paginas")

const consign = require("consign")
consign().include("./rotas").into(run_express)

const porta = process.env.PORT || 7777

module.exports = {run_express, porta}