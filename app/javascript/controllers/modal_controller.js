import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="modal"
export default class extends Controller {
  connect() {
    // console.log("hello from turbo modal");
  }

  onSubmit(e) {
    if (e.detail.success) {
      this.hide();
    }
  }

  hide() {
    this.element.remove();
  }
}
