
import {Questoes} from "./Questoes.js";

var currentQuestion = 0;
var acertos = 0;
var erros= 0;
const questionarioContainer = document.getElementById("flex-container")
const tv_questao = document.getElementById("questao");
const topoItem = document.getElementsByClassName("spanitem");
const opcaobtn = document.getElementsByClassName("btn-op");
const containerOpcoes = document.getElementsByClassName("opcoes");

const halfCircles = document.querySelectorAll('.half-circle')
const halfCircleTop = document.querySelector('.half-circle-top')
const progressBarCircle = document.querySelector('.progressbar-circle')

const questoesHere = new Questoes();
 var tamanhoQuestoes = questoesHere.questoes.length;

  
document.getElementById("btn-restart").addEventListener("click",function(){
   reiniciaQuestionario()
});

document.getElementById("btn-close").addEventListener("click",function(){
    removePopUp()
});

  document.getElementById('overlay').addEventListener('click', function() {
   removePopUp()
  });
for (let i = 0; i < opcaobtn.length; i++) {
    opcaobtn[i].addEventListener("click",validaResposta);
  }

 

  mostraProximaQuestao();
  function mostraProximaQuestao(){
    progressBarCircle.textContent =currentQuestion

    halfCircles.forEach(el => {
        el.style.transform = `rotate(${currentQuestion*100/tamanhoQuestoes}deg)`

        if((currentQuestion*100/tamanhoQuestoes)>=(10*tamanhoQuestoes/100)) {
            halfCircles[0].style.transform = `rotate(${10*tamanhoQuestoes/100}deg)`
            halfCircleTop.style.opacity = '0'
        } else {
            halfCircleTop.style.opacity = '1'
        }
    })
    //containerOpcoes.classList.add('opcoes');
    topoItem[0].innerHTML = acertos
    topoItem[1].innerHTML = erros;
    topoItem[2].innerHTML = tamanhoQuestoes;
   
    tv_questao.innerHTML = questoesHere.questoes[currentQuestion].questao;
    opcaobtn[0].innerHTML = questoesHere.questoes[currentQuestion].opcoes[0].opcao
    opcaobtn[1].innerHTML = questoesHere.questoes[currentQuestion].opcoes[1].opcao
    opcaobtn[2].innerHTML = questoesHere.questoes[currentQuestion].opcoes[2].opcao
    opcaobtn[3].innerHTML = questoesHere.questoes[currentQuestion].opcoes[3].opcao
    validaResposta();
  }

  function validaResposta() {
    opcaobtn[0].onclick = () => {
        currentQuestion++;
        if(currentQuestion<tamanhoQuestoes){
        if(questoesHere.questoes[currentQuestion].opcoes[0].resposta) {
           acertos++;
           mostraProximaQuestao();
        }else{
            erros++;
            mostraProximaQuestao();
        }  
    }else{
        chamaPopUp();
    }
    }

    opcaobtn[1].onclick = () => {
        currentQuestion++;
        if(currentQuestion<tamanhoQuestoes){
        if(questoesHere.questoes[currentQuestion].opcoes[1].resposta) {
            acertos++;
            mostraProximaQuestao();
         }else{
             erros++;
             mostraProximaQuestao();
         }
        }else{
            questionarioContainer.classList.add("hide");
            alert("Terminou o questionario!");
        }
    }

    opcaobtn[2].onclick = () => {
        currentQuestion++;
        if(currentQuestion<tamanhoQuestoes){
        if(questoesHere.questoes[currentQuestion].opcoes[2].resposta) {
            acertos++;
            mostraProximaQuestao();
         }else{
             erros++;
             mostraProximaQuestao();
         }
        }else{
            questionarioContainer.classList.add("hide");
            alert("Terminou o questionario!");
        }
    }

    opcaobtn[3].onclick = () => {
        currentQuestion++;
        if(currentQuestion<tamanhoQuestoes){
        if(questoesHere.questoes[currentQuestion].opcoes[3].resposta) {
            acertos++;
            mostraProximaQuestao();
         }else{
             erros++;
             mostraProximaQuestao();
         }
    }else{
        questionarioContainer.classList.add("hide");
        alert("Terminou o questionario!");
    }
}}

function reiniciaQuestionario(){
    document.getElementById('overlay').classList.remove('is-visible');
    document.getElementById('modal').classList.remove('is-visible');
    currentQuestion = 0;
    acertos = 0;
    erros= 0;
    mostraProximaQuestao();
}

function chamaPopUp(){
    document.getElementById('overlay').classList.add('is-visible');
    document.getElementById('modal').classList.add('is-visible');
}

function removePopUp(){
    document.getElementById('overlay').classList.remove('is-visible');
    document.getElementById('modal').classList.remove('is-visible');
}

