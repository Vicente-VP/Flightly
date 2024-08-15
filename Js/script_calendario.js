const elementoMes = document.getElementById('mes-calendario');
const elementoAno = document.getElementById('ano-calendario');
const elementoDatas = document.getElementById('datas');
const btnAnt = document.getElementById('btnAnt');
const btnSeg = document.getElementById('btnSeg');

let dataAtual = new Date();

const atualizarCalendario = () => {
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth();

    const primeiroDia = new Date(anoAtual, mesAtual, 1);
    const ultimoDia = new Date(anoAtual, mesAtual + 1, 0);
    const diasTotais = ultimoDia.getDate();
    const primeiroDiaIndex = primeiroDia.getDay();
    const ultimoDiaIndex = ultimoDia.getDay();

    const stringMes = dataAtual.toLocaleDateString('default', { month: 'long' });
    const stringAno = dataAtual.toLocaleDateString('default', { year: 'numeric' });

    elementoMes.textContent = stringMes;
    elementoAno.textContent = stringAno;

    let datasHTML = '';

    // Dias inativos antes do início do mês
    for (let i = 0; i < primeiroDiaIndex; i++) {
        const dataAnt = new Date(anoAtual, mesAtual, -primeiroDiaIndex + i + 1);
        datasHTML += `<div class="data-inativa">${dataAnt.getDate()}</div>`;
    }

    // Dias do mês atual
    for (let i = 1; i <= diasTotais; i++) {
        const data = new Date(anoAtual, mesAtual, i);
        const classeAtiva = data.toDateString() === new Date().toDateString() ? 'active' : '';
        datasHTML += `<div class="data ${classeAtiva}">${i}</div>`;
    }

    // Dias inativos após o final do mês
    for (let i = 1; i < 7 - ultimoDiaIndex; i++) {
        const dataSeg = new Date(anoAtual, mesAtual + 1, i);
        datasHTML += `<div class="data-inativa">${dataSeg.getDate()}</div>`;
    }

    elementoDatas.innerHTML = datasHTML;
}


btnAnt.addEventListener('click', () => {
    dataAtual.setMonth(dataAtual.getMonth() - 1);
    atualizarCalendario();
})

btnSeg.addEventListener('click', () => {
    dataAtual.setMonth(dataAtual.getMonth() + 1);
    atualizarCalendario();
})

atualizarCalendario();
