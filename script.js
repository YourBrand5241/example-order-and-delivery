const DELIVERY_FEE = 3.50;

const ITEMS = [
  { id: 1, section: "deals", name: "Party Jug Deal", desc: "Our house party jug, ready to share.", price: 15.00 },
  { id: 2, section: "deals", name: "Mixer Deal", desc: "Spirit + 6 pack of mixers.", price: 21.99 },
  { id: 3, section: "wines", name: "House Red", desc: "Smooth, medium-bodied red.", price: 9.99 },
  { id: 4, section: "wines", name: "House White", desc: "Crisp and refreshing.", price: 9.99 },
  { id: 5, section: "cocktails", name: "Mixed Cocktail", desc: "Choose your flavour in store.", price: 6.99 },
];

const SECTIONS = [
  { key: "deals", elementId: "list-deals" },
  { key: "wines", elementId: "list-wines" },
  { key: "cocktails", elementId: "list-cocktails" },
];

let basket = [];

function formatPrice(amount) {
  return `£${amount.toFixed(2)}`;
}

function renderProducts() {
  SECTIONS.forEach(section => {
    const list = document.getElementById(section.elementId);
    list.innerHTML = "";
    ITEMS.filter(i => i.section === section.key).forEach(item => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <div class="product-name">${item.name}</div>
        <div class="product-desc">${item.desc}</div>
        <div class="product-footer">
          <span class="product-price">${formatPrice(item.price)}</span>
          <button class="add-btn" data-id="${item.id}">Add</button>
        </div>
      `;
      list.appendChild(card);
    });
  });

  document.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => addToBasket(Number(btn.dataset.id)));
  });
}

function addToBasket(itemId) {
  const item = ITEMS.find(i => i.id === itemId);
  const existing = basket.find(b => b.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    basket.push({ id: item.id, name: item.name, price: item.price, qty: 1 });
  }
  renderBasket();
}

function removeFromBasket(itemId) {
  basket = basket.filter(b => b.id !== itemId);
  renderBasket();
}

function getFulfilmentChoice() {
  return document.querySelector('input[name="fulfilment"]:checked').value;
}

function renderBasket() {
  const container = document.getElementById("basket-items");
  const totalEl = document.getElementById("basket-total");

  if (basket.length === 0) {
    container.innerHTML = `<p class="empty-basket">Nothing added yet</p>`;
    totalEl.textContent = formatPrice(0);
    updateCheckoutAvailability();
    return;
  }

  container.innerHTML = "";
  let subtotal = 0;
  basket.forEach(item => {
    const lineTotal = item.price * item.qty;
    subtotal += lineTotal;
    const row = document.createElement("div");
    row.className = "basket-row";
    row.innerHTML = `
      <span>${item.qty} × ${item.name}</span>
      <span>${formatPrice(lineTotal)} <button data-id="${item.id}">remove</button></span>
    `;
    container.appendChild(row);
  });

  container.querySelectorAll("button[data-id]").forEach(btn => {
    btn.addEventListener("click", () => removeFromBasket(Number(btn.dataset.id)));
  });

  const isDelivery = getFulfilmentChoice() === "delivery";
  const total = subtotal + (isDelivery ? DELIVERY_FEE : 0);
  totalEl.textContent = formatPrice(total);
  updateCheckoutAvailability();
}

function updateCheckoutAvailability() {
  const nameInput = document.getElementById("customer-name");
  const checkoutBtn = document.getElementById("checkout-btn");
  checkoutBtn.disabled = basket.length === 0 || !nameInput.value.trim();
}

function setupCheckout() {
  const overlay = document.getElementById("confirmation-overlay");
  document.getElementById("checkout-btn").addEventListener("click", () => {
    overlay.classList.remove("hidden");
    basket = [];
    renderBasket();
    document.getElementById("customer-name").value = "";
  });
  document.getElementById("close-overlay").addEventListener("click", () => overlay.classList.add("hidden"));
}

document.getElementById("customer-name").addEventListener("input", updateCheckoutAvailability);
document.querySelectorAll('input[name="fulfilment"]').forEach(radio => {
  radio.addEventListener("change", renderBasket);
});

renderProducts();
renderBasket();
setupCheckout();
