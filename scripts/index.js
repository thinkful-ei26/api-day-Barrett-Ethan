/* eslint-disable strict */
/* global shoppingList, api, store */
/*eslint-env jquery*/


$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems((items) => {
    // console.log(items);
    items.forEach((item) => store.addItem(item));
    const item = store.items[0];
    console.log('current name: ' + item.name);
    store.findAndUpdate(item.id, { name: 'foobar' });
    console.log('new name: ' + item.name);
    shoppingList.render();
  });
});


// api.getItems((items) => {
//   const item = items[0];
//   api.updateItem(item.id, { checked: true }, () => {
//     console.log('updated!');
//   });
// });