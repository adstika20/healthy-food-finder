class NavBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          width: 100%;
          color: rgb(24, 74, 8);
          font-family:cursive;
          text-align: center;
          
        }
        h2 {
          display: block;
          margin-right: 10px;
          color: rgb(23, 89, 16);
          font-size: 27px;
          padding: 10px;
          font-weight: bold;
          border-bottom: 10px;
          
        }
      </style>
      <h2>Find food recipes for your ingredients
      </h2>
      <blockquote>"The most delicious food recipes, now in your hands"<br>
    </blockquote>
    `;
  }
}

customElements.define('nav-bar', NavBar);
