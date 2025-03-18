const content = document.querySelector('.content');
const cardsContainer = content.querySelector('.places__list');

function addCard(cardData, deleteCardElement) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardElement.querySelector('.card__image').src = cardData.link;
  cardElement.querySelector('.card__title').textContent = cardData.name;

  deleteButton.addEventListener('click', () => deleteCardElement(cardElement));

  return cardElement;
}

function deleteCard(cardElement) {
  cardElement.remove();
}

initialCards.forEach(card => {
  const newCard = addCard(card, deleteCard)
  cardsContainer.append(newCard);
});
