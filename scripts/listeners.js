import test from "./combos2.js";

export default function addListeners() {
  let fields = [];
  for (let i = 1; i < 8; i++) {
    fields.push(document.getElementById(i));
  }

  fields.forEach(
    (field, index) => {
      field.addEventListener("input", () => { moveForward(index + 1) });
      field.addEventListener("keydown", () => { moveBack(index + 1) });
    }
  );

  document.getElementById("submit").addEventListener("click", () => {
    let letters = fields.map(
      (field) => {
        return field.value.toUpperCase();
      }
    );
    test(letters);
  });

}

function moveForward(position) {
  event.target.value = event.target.value.toLowerCase();
  if (position < 7 && event.target.value) {
    document.getElementById((position + 1).toString()).focus();
  }
}

function moveBack(position) {
  if (position > 1 && !event.target.value && event.key === "Backspace") {
    document.getElementById((position - 1).toString()).focus();
  }
}
