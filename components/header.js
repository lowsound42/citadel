class Header extends HTMLElement {
  static observedAttributes = ['color', 'size']

  constructor() {
    super()
  }

  connectedCallback() {
    console.log('custom element connected')
  }

  disconnectedCallBack() {
    console.log('custom element disconnected')
  }

  adoptedCallback() {
    console.log('custom element moved from page')
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} changed`)
  }
}

customElements.define('my-custom-element', MyCustomElement)
