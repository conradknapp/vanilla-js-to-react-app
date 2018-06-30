import Form from "./Form";
import CardList from "./CardList";

class App {
  constructor() {
    this.cards = this.getCards();
    this.addCard = this.addCard.bind(this);

    this.clearButton = document.querySelector('button[type="button"]');
    this.clearButton.addEventListener("click", () => this.clearCards());
  }
  getCards() {
    if (localStorage.getItem("cards")) {
      return JSON.parse(localStorage.getItem("cards"));
    } else {
      return [];
    }
  }
  addCard(data) {
    this.cards = [...this.cards, data];
    CardList(this.cards);
    localStorage.setItem("cards", JSON.stringify(this.cards));
  }
  clearCards() {
    this.cards = [];
    localStorage.setItem("cards", "");
    render(CardList(this.cards), document.getElementById("root"));
  }
}

const app = new App();
const form = new Form(app.addCard, app.clearCards);

export const render = (html, node) => (node.innerHTML = html);

render(CardList(app.cards), document.getElementById("root"));
