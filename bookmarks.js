const bookmark = document.querySelector('[data-js="question-box-bookmark"]');
console.log(bookmark);
bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("question-box_bookmark--active");
});
