(function () {
  const e = document.querySelectorAll(".needs-validation");
  Array.from(e).forEach((a) => {
    a.addEventListener(
      "submit",
      (t) => {
        a.checkValidity() || (t.preventDefault(), t.stopPropagation()),
          a.classList.add("was-validated");
      },
      !1
    );
  });
})();
