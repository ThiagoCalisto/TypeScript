import { NegociacaoController } from "./controllers/Negociacao-controller.js";
import { Negociacao } from "./models/Negociacao.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event =>{
    event.preventDefault();
    controller.adiciona();
})
