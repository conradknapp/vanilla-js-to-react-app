import axios from "axios";

const API_URL = "https://api.github.com/users";

class Form {
  constructor(addCard) {
    this.addCard = addCard;

    this.API_URL = "";
    this.searchTerm = "";

    this.searchInput = document.querySelector('input[name="search"]');
    this.searchInput.addEventListener("keyup", () => this.handleKeyup(event));

    this.form = document.querySelector("form");
    this.form.addEventListener("submit", () => this.handleSubmit(event));

    this.submitButton = document.querySelector("button[type='submit']");
  }
  handleKeyup(event) {
    this.searchTerm = event.target.value;
    this.API_URL = `${API_URL}/${event.target.value}`;
    this.submitButton.disabled = !event.target.value;
  }
  handleSubmit(data) {
    event.preventDefault();
    axios
      .get(this.API_URL)
      .then(({ data }) => this.addCard(data))
      .catch(err => this.formatError(err));
    this.form.reset();
  }
  formatError(err) {
    console.error(err);
    const errorText = document.createElement("p");
    errorText.style.color = "red";
    errorText.innerText = "No user found";
    this.form.appendChild(errorText);
    setTimeout(() => this.form.removeChild(errorText), 5000);
  }
}

export default Form;
