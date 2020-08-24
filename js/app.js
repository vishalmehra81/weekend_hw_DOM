document.addEventListener('DOMContentLoaded', () => {

  carForm();
//   const newCarForm = document.querySelector('#new-car-form');
//   newCarForm.addEventListener('submit', handleNewCarForm);


  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

});

const carForm = function(){
const newCarForm = document.querySelector('#new-car-form');
  newCarForm.addEventListener('submit', handleNewCarForm);
};
const handleNewCarForm = function (event) {
  event.preventDefault();

  const carDetailListItem = createCarDetailListItem(event.target);
  const carDetail = document.querySelector('#car-detail');
  carDetail.appendChild(carDetailListItem);

  event.target.reset();
};

  const createCarDetailListItem = function (form) {
    const carDetailListItem  = document.createElement('li');
    carDetailListItem.classList.add('car-Details-List-Item');

    const make = document.createElement('h4');
    make.textContent = form.make.value;
    carDetailListItem.appendChild(make);

    const model = document.createElement('h4');
    model.textContent = form.model.value;
    carDetailListItem.appendChild(model);

    const country = document.createElement('h4');
    country.textContent = form.country.value;
    carDetailListItem.appendChild(country);

    const body = document.createElement('h4');
    body.textContent = form.body.value;
    carDetailListItem.appendChild(body);

    const fuel = document.createElement('h4');
    fuel.textContent = form.fuel.value;
    carDetailListItem.appendChild(fuel);

    const gear = document.createElement('h4');
    gear.textContent = form.gear.value;
    carDetailListItem.appendChild(gear);

    const engine = document.createElement('h4');
    engine.textContent = form.engine.value;
    carDetailListItem.appendChild(engine);

    return carDetailListItem;
  };

  const handleDeleteAllClick = function (event) {
  const carDetail = document.querySelector('#car-detail');
  carDetail.innerHTML = "";
};