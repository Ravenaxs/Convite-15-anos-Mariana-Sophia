// A data e a hora da festa já estão configuradas.
// Festa: 25 de Outubro de 2025 às 19:00.
const dataDaFesta = new Date('2025-10-25T19:00:00').getTime();

// Elementos da página que vamos atualizar
const diasEl = document.getElementById('days');
const horasEl = document.getElementById('hours');
const minutosEl = document.getElementById('minutes');
const segundosEl = document.getElementById('seconds');
const countdownEl = document.getElementById('countdown');

// Função para formatar o tempo (adiciona um zero na frente se for menor que 10)
function formatarTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}

// Função que atualiza a contagem regressiva
function atualizarContagem() {
    const agora = new Date().getTime();
    const distancia = dataDaFesta - agora;

    // Se a data já passou, mostra uma mensagem
    if (distancia < 0) {
        clearInterval(intervalo);
        // Remove a contagem e a mensagem "cta"
        document.querySelector('.cta').style.display = 'none';
        countdownEl.innerHTML = "<h2 style='color:#8e44ad;'>A festa já começou!</h2>";
        return;
    }

    // Cálculos para tempo
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Atualiza os números na tela
    diasEl.innerHTML = formatarTempo(dias);
    horasEl.innerHTML = formatarTempo(horas);
    minutosEl.innerHTML = formatarTempo(minutos);
    segundosEl.innerHTML = formatarTempo(segundos);
}

// Inicia a contagem e a atualiza a cada segundo
atualizarContagem(); // Chama uma vez para não esperar 1s para aparecer
const intervalo = setInterval(atualizarContagem, 1000);