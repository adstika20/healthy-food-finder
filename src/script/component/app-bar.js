class AppBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    connectedCallback() {
        this.render();
    }
    render(){
        this.innerHTML =
        `
        <div class="jumbotron jumbotron-fluid">
        <div class="container text">
            <h2 class="lead">healthy Food Recipes<br></h2>
            <p>"Hello, we are Mother's Recipes, a delicious and healthy food.<br> 
             So just find what you want to eat, and we'll guide you through making it!<br></p>
        </div>
        </div>
        `;
    }
}

customElements.define("app-bar",AppBar);