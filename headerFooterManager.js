
class ReuseHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
        <img src="assets/icon64.png" alt="logo">
        <h1>Semanario</h1>
        <ul class="cabecalho">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
        </ul>
        <span class="material-symbols-outlined" onclick="toggleMenu()">
            menu
        </span>

        <div class="sub-menu-wrap" id="subMenu">
            <div class="sub-menu">
                <a href="week1.html" class="sub-menu-link">
                    <img src="assets/1.png" alt="numero-1">
                    <span>Week One</span>
                </a>
                <a href="week2.html" class="sub-menu-link">
                    <img src="assets/2.png" alt="numero-2">
                    <span>Week Two</span>
                </a>
                <a href="week3.html" class="sub-menu-link">
                    <img src="assets/3.png" alt="numero-3">
                    <span>Week Three</span>
                </a>
                <a href="week4.html" class="sub-menu-link">
                    <img src="assets/4.png" alt="numero-4">
                    <span>Week Four</span>
                </a>
                <a href="week5.html" class="sub-menu-link">
                    <img src="assets/5.png" alt="numero-5">
                    <span>Week Five</span>
                </a>
                <a href="week6.html" class="sub-menu-link">
                    <img src="assets/6.png" alt="numero-6">
                    <span>Week Six</span>
                </a>
                <a href="week7.html" class="sub-menu-link">
                    <img src="assets/7.png" alt="numero-7">
                    <span>Week Seven</span>
                </a>
                <a href="week8.html" class="sub-menu-link">
                    <img src="assets/8.png" alt="numero-8">
                    <span>Week Eight</span>
                </a>
                <a href="week9.html" class="sub-menu-link">
                    <img src="assets/9.png" alt="numero-9">
                    <span>Week Nine</span>
                </a>
                <a href="week10.html" class="sub-menu-link">
                    <img src="assets/10.png" alt="numero-10">
                    <span>Week Ten</span>
                </a>
            </div>
        </div>

    </nav>
    <script>
        const subMenu = document.getElementById("subMenu");

        function toggleMenu() {
            subMenu.classList.toggle("open-menu");
        }
    </script>
    `
    }
}

class ReuseFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="rodape">
            <img src="assets/logo-branco.png" alt="logo-branco">
        </div>
        <div class="autoria">
            <h3>by 0levi6</h3>
        </div>    
        `
    }
}

customElements.define('reuse-header', ReuseHeader)
customElements.define('reuse-footer', ReuseFooter)
