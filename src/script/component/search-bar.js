class SearchBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }


  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .search-container {

          max-width: 800px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          padding: 16px;
          border-radius: 5px;
          display: flex;
          position: sticky;
          top: 10px;
          background-color: white;
          font-family:cursive;
          
        }
       
        .search-container > input {
          width: 75%;
          padding: 16px;
          border: 0;
          border-bottom: 1px solid green;
          font-family:cursive;
        }
       
        .search-container > input:focus {
          outline: 0;
          border-bottom: rgb(38, 131, 30);
        }
       
        .search-container > input:focus::placeholder {
          font-weight: bold;
          font-family:cursive;
        }
        
        .search-container >  input::placeholder {
          color: rgb(38, 131, 30);
          font-weight: normal;
    
        }
       
        .search-container > button {
          width: 23%;
          cursor: pointer;
          margin-left: auto;
          padding: 16px;
          background-color:rgb(38, 131, 30);
          color: white;
          border: 0;
          text-transform: uppercase;
          border-top-right-radius: 2rem;
          border-bottom-right-radius: 2rem;
          border-top-left-radius: 2rem;
          border-bottom-left-radius: 2rem;
        }
       
        @media screen and (max-width: 550px){
          .search-container {
            flex-direction: column;
            position: static;
          }
     
          .search-container > input {
            width: 100%;
            margin-bottom: 12px;
          }
     
          .search-container > button {
            width: 55px;
            height: 55px;
            font-size: 1.8rem;
            background: var(--tenne-tawny);
            color: #fff;
            border: none;
            border-top-right-radius: 2rem;
            border-bottom-right-radius: 2rem;
            
            -webkit-transition: all 0.4s linear;
            -moz-transition: all 0.4s linear;
            -ms-transition: all 0.4s linear;
            -o-transition: all 0.4s linear;
            transition: all 0.4s linear;
          }
        }
      </style>
      
      <div id="search-container" class="search-container">
        <input placeholder="Search your favorite Dishes" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search 
        
      </div>
    `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
