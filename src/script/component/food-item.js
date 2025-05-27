class FoodItem extends HTMLElement {

  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }
  set food(food){
    this._food = food;
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
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(5, 5, 5, 5);
          border-radius: 20px;
          overflow: hidden;
          color:white;
          
        }
        .fan-art-food {
          width: 100%;
          max-height: 430px;
          object-fit: cover;
          object-position: center;
        }
        .food-info {
          padding: 24px;
          color:white;
          margin: 100;
          padding: 100;
        }
        .food-info > h2 {
          font-size: 25px;
          color: black;
        }
        .food-info > p {
          font-family:cursive;
          color: black;
          font-size: 15px;
          text-align: left;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 50; 
        }
      </style>

      <img class="fan-art-food" src="${this._food.strMealThumb}" alt="Fan Art">
      <div class="food-info">
        <h2>${this._food.strMeal} - ${this._food.strArea}</h2>
        <p>Ingredient : </br>${this._food.strIngredient1} </p>
        <p>${this._food.strIngredient2} </p>
        <p>${this._food.strIngredient3} </p>
        <p>${this._food.strIngredient4} </p>
        <p>${this._food.strIngredient5} </p>
        <p>${this._food.strIngredient6} </p>
        <p>${this._food.strIngredient7} </p>
        <p>${this._food.strIngredient8} </p>
        <p>${this._food.strIngredient9} </p>
        <p>${this._food.strIngredient10} </p>
        <p>${this._food.strIngredient11} </p>
        <p>${this._food.strIngredient12} </p>
        <p>${this._food.strIngredient13} </p>
        <p> </br></p>
        <p>How to make : </br> ${this._food.strInstructions}</p>
      </div>
    `;
  }
}

customElements.define('food-item', FoodItem);
