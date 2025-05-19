
//Script para criar uma nova tag HTML permitindo a reutilização do código abaixo
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="topbar__container">
                <div class="navbuttons__topbar">
                <a href="../home/index.html" class="kumadev"><i class="fa fa-code" style="margin-right: .5vh;"></i>KumaDev</a>
                <button type="button"><a href="../home/index.html">Home</a></button>
                <button type="button"><a href="../formacao/formacao.html">Formação</a></button>
                <button type="button"><a href="../portfolio/portfolio.html">Portfólio</a></button>
                <button type="button"><a href="mailto:lucas.khmn@gmail.com">Contato</a></button>
                </div>
            </div>
        `;
    }
}

customElements.define('main-topbar', Header);