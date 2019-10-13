document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const raceListItem = createRaceListItem(event.target);
  const raceList = document.querySelector('#race-list');
  raceList.appendChild(raceListItem);

  event.target.reset ();
}

const createRaceListItem = function (form) {
  const raceListItem = document.createElement('li');
  raceListItem.classList.add('race-list-item');

  const driver = document.createElement('h2');
  driver.textContent = form.driver.value;
  raceListItem.appendChild(driver);

  const manufacturer = document.createElement('h3');
  manufacturer.textContent = form.manufacturer.value;
  raceListItem.appendChild(manufacturer);

  const position = document.createElement('h4');
  position.textContent = form.position.value;
  raceListItem.appendChild(position);

  const finishedretired = document.createElement('p');
  finishedretired.textContent = form.finishedretired.value;
  raceListItem.appendChild(finishedretired);

  const tyretype = document.createElement('p');
  tyretype.textContent = form.tyres.value;
  raceListItem.appendChild(tyretype);

  return raceListItem;

}

const handleDeleteAllClick = function (event) {
  const raceList = document.querySelector('#race-list');
  raceList.innerHTML = null;
}
