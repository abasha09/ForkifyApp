import View from "./View";
import icons from "url:../../img/icons.svg";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");

      if (!btn) {
        return;
      }

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkupButton(pageNum, icon, side) {
    return ` <button data-goto=${pageNum} class="btn--inline pagination__btn--${side}">
    <span>Page ${pageNum}</span>
    <svg class="search__icon">
      <use href="${icon}#icon-arrow-right"></use>
    </svg>
  </button>`;
  }

  _generateMarkup() {
    const curPage = this._data.page;

    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButton(curPage + 1, icons, "next");
    }
    // Last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupButton(curPage - 1, icons, "prev");
    }
    //other page
    if (curPage < numPages) {
      return `${this._generateMarkupButton(curPage - 1, icons, "prev")}
      ${this._generateMarkupButton(curPage + 1, icons, "next")}`;
    }
    // page 1, and there are NO other pages
    return ``;
  }
}

export default new PaginationView();
