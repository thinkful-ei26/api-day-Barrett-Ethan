/* eslint-disable strict */
/* global shoppingList, api, store */
/*eslint-env jquery*/


$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
});


// api.createItem('pears', (newItem) => {
//   api.getItems((items) => {
//     console.log(items);
//   });
// });