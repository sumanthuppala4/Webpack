import faker from "faker";

let products = "";

const mount = (el) => {
  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  if (el) {
    mount(el);
  }
}

export { mount };
