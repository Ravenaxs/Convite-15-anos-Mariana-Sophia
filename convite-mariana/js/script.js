// A data da festa está no formato Ano-Mês-Dia, que é o padrão para o JavaScript.
// A data representa: 25 de Outubro de 2025, às 19:00.
const dataDaFesta = new Date('2025-10-25T19:00:00').getTime();

// Captura os elementos do HTML que vamos atualizar.
const diasEl = document.getElementById('days');
const horasEl = document.getElementById('hours');
const minutosEl = document.getElementById('minutes');
const segundosEl = document.getElementById('seconds');
const countdownEl = document.getElementById('countdown');

// Função para adicionar um zero na frente de números menores que 10 (ex: 09, 08, 07).
function formatarTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}

// Função principal que atualiza a contagem a cada segundo.
function atualizarContagem() {
    // Pega a data e hora de agora.
    const agora = new Date().getTime();
    
    // Calcula a diferença de tempo entre a festa e agora.
    const distancia = dataDaFesta - agora;

    // Se a distância for negativa, a festa já começou.
    if (distancia < 0) {
        clearInterval(intervalo); // Para a contagem.
        document.querySelector('.cta').style.display = 'none';
        countdownEl.innerHTML = "<h2 style='color:#8e44ad;'>A festa já começou!</h2>";
        return; // Encerra a função aqui.
    }

    // Converte a distância em dias, horas, minutos e segundos.
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Atualiza os números na tela.
    diasEl.innerHTML = formatarTempo(dias);
    horasEl.innerHTML = formatarTempo(horas);
    minutosEl.innerHTML = formatarTempo(minutos);
    segundosEl.innerHTML = formatarTempo(segundos);
}

// Inicia a contagem e define que ela deve ser atualizada a cada 1000ms (1 segundo).
const intervalo = setInterval(atualizarContagem, 1000);
// Chama a função uma vez no início para não ter um atraso de 1s.
atualizarContagem();