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

const servidor = require("./config/servidor")

let run_express = servidor.run_express

let porta = servidor.porta


run_express.listen(porta, function () {
    console.log(`servidor rodando em http://localhost/${porta}: `)
})

