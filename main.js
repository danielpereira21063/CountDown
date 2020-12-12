const formatarDigito = (digito) => `0${digito}`.slice(-2);
const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');
    const qtSegundos = tempo % 60;
    const qtMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtDias = Math.floor(tempo / (60 * 60 *24));
    segundos.textContent = formatarDigito(qtSegundos);
    minutos.textContent = formatarDigito(qtMinutos);
    horas.textContent = formatarDigito(qtHoras);
    dias.textContent = formatarDigito(qtDias);
}
const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);
    const contar = () => {
        if(tempo === 0) {
            pararContagem();
        }
        atualizar(tempo);
        tempo--;
    }
    const id = setInterval(contar,1000);
}

const tempoRestante = () => {
    const dataEvento = new Date('2020-11-14 10:00:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}
contagemRegressiva(tempoRestante());