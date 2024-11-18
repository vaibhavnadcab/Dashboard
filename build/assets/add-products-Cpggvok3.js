(function () {
  new Choices("#product-color-add", { allowHTML: !0, removeItemButton: !0 }),
    new Choices("#product-tags", { allowHTML: !0, removeItemButton: !0 });
  var e = [
    [{ header: [1, 2, 3, 4, 5, 6, !1] }],
    [{ font: [] }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["clean"],
  ];
  new Quill("#product-features", { modules: { toolbar: e }, theme: "snow" }),
    flatpickr("#publish-date", {}),
    flatpickr("#publish-time", {
      enableTime: !0,
      noCalendar: !0,
      dateFormat: "H:i",
    });
  const t = document.querySelector(".product-Images");
  FilePond.create(t);
  const o = document.querySelector(".product-documents");
  FilePond.create(o);
})();
