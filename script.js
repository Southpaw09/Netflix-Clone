const acc = document.getElementsByClassName("accordion-content");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", () => {
    for (let j = 0; j < acc.length; j++) {
      acc[j].classList.remove("active");
    }
    acc[i].classList.add("active");
  });
}
