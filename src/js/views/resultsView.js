import View from "./View";
import icons from "url:../../img/icons.svg";

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = "No recipes found for your query! Please try again";
  _successMessage =
    "Start by searching for a recipe or an ingredient. Have fun!";

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join("");
  }
  _generateMarkupPreview(result) {
    return `          <li class="preview">
    <a class="preview__link" href="#${result.id}">
      <figure class="preview__fig">
        <img src="${result.image}" alt="${result.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${result.title}</h4>
      </div>
    </a>
  </li>`;
  }
}

export default new ResultsView();
