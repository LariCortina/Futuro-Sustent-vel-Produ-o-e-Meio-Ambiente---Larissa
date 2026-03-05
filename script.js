// ==================== INTERATIVIDADE 1 ====================
// Ao clicar em qualquer elemento com a classe "dado-interativo" (números importantes)
// aparece um alerta com mensagem personalizada.
const dados = document.querySelectorAll('.dado-interativo');
dados.forEach(elemento => {
    elemento.addEventListener('click', function() {
        const valor = this.innerText; // pega o texto clicado
        alert(`🔍 Você clicou no número: ${valor}. Esse dado é crucial para entender o impacto!`);
    });
});

// ==================== INTERATIVIDADE 2 ====================
// Clicar no título "Greenwashing" mostra/esconde um exemplo real.
const tituloGreen = document.getElementById('greenwashing-titulo');
const exemploGreen = document.getElementById('greenwashing-exemplo');

tituloGreen.addEventListener('click', function() {
    // Se o exemplo estiver escondido, mostra; se estiver visível, esconde
    if (exemploGreen.classList.contains('hidden')) {
        exemploGreen.classList.remove('hidden');
    } else {
        exemploGreen.classList.add('hidden');
    }
});

// ==================== INTERATIVIDADE 3 ====================
// Clicar no bloco do exemplo de eletrônicos mostra uma mensagem extra.
const exemploEletro = document.getElementById('exemplo-eletronicos');
const msgEletro = document.getElementById('mensagem-eletronicos');

exemploEletro.addEventListener('click', function() {
    // Se a mensagem estiver oculta, mostra; se não, oculta
    if (msgEletro.classList.contains('hidden')) {
        msgEletro.classList.remove('hidden');
    } else {
        msgEletro.classList.add('hidden');
    }
});

// ==================== INTERATIVIDADE 4 (EXTRA, mas vamos incluir como terceira) ====================
// Na verdade já temos 3: (1) clicar nos números, (2) clicar no título greenwashing, (3) clicar no exemplo eletrônicos.
// Mas também farei as linhas da tabela destacarem ao clicar e mostrar uma mensagem.
const linhasTabela = document.querySelectorAll('#tabela-impacto tbody tr');
const mensagemTabela = document.getElementById('tabela-mensagem');

linhasTabela.forEach(linha => {
    linha.addEventListener('click', function() {
        // Remove a classe 'highlight' de todas as linhas
        linhasTabela.forEach(l => l.classList.remove('highlight'));
        // Adiciona a classe na linha clicada
        this.classList.add('highlight');

        // Pega o texto da primeira célula (setor) e da segunda (impacto)
        const setor = this.cells[0].innerText;
        const impacto = this.cells[1].innerText;
        mensagemTabela.innerText = `🔔 Setor: ${setor} - Impacto: ${impacto}. Clique em outro setor para comparar.`;
    });
});

// (Opcional) Suavizar a rolagem ao clicar nos links do menu
const linksMenu = document.querySelectorAll('.menu a');
linksMenu.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // evita o comportamento padrão do link
        const href = this.getAttribute('href'); // pega o id da seção (ex: #intro)
        const secao = document.querySelector(href);
        secao.scrollIntoView({ behavior: 'smooth' }); // rolagem suave
    });
});