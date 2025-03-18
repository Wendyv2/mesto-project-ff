const content = document.querySelector('.content');
const cardsContainer = content.querySelector('.places__list');

function createCard(cardData, deleteCardElement) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardElement.querySelector('.card__title').textContent = cardData.name;

  deleteButton.addEventListener('click', () => deleteCardElement(cardElement));

  return cardElement;
}

function deleteCard(cardElement) {
  cardElement.remove();
}

initialCards.forEach(card => {
  const newCard = createCard(card, deleteCard)
  cardsContainer.append(newCard);
});
