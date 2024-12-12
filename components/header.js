const headerTemplate = document.createElement('template')

headerTemplate.innerHTML = `
  <style>
    nav {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(48, 45, 47, 0.63);
      width: 100vw;
      font-family: MulishVariable;
    }

    ul {
      padding: 0;
    }

    ul li {
      list-style: none;
      display: inline;
    }

    a {
      font-weight: 700;
      margin: 0 25px;
      color: #fff;
      text-decoration: none;
    }

    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }
  </style>
  <header>
    <nav>
      <ul>
        <li><a href="#">Music</a></li>
        <li><a href="#">Computers</a></li>
        <li><a href="#">Cycling</a></li>
        <li><a href="/easter">The Real World</a></li>
      </ul>
    </nav>
  </header>
`

class Header extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' })
    shadowRoot.appendChild(headerTemplate.content)
  }
}

customElements.define('header-element', Header)
