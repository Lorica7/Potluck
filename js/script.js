// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

const assignButton = document.querySelector(".assign");

const assignedItems = document.querySelector(".assigned-items");

const potluckItems = [
  "couscous salad",
  "olive bread",
  "hummus and veggies",
  "mozarella caprese",
  "roast chicken",
  "lamb skewers",
  "baked ziti",
  "chicken with zuccini",
  "eggplant rollatini",
  "pork chops",
  "salad"
];

const clearInput = () => {
  guestInput.value = "";
};

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
  guestCount.innerText = guests.length;
};

const addToList = (guest) => {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

addGuestButton.addEventListener("click", () => {
  const guest = guestInput.value;
  if (guest !== "") {
    addToList(guest);
    clearInput();
    updateGuestCount();
  }
});

const assignItems = function () {
  const allGuests = document.querySelectorAll("ul.guest-list > li");
  for (let guest of allGuests) {
    const pIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPutluckItem = potluckItems[pIndex];
    let newItem = document.createElement("li");
    newItem.innerText = `${guest.innerText} is bringing ${randomPutluckItem}`;
    assignedItems.append(newItem);
    potluckItems.splice(pIndex, 1);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
