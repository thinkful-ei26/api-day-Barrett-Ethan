/* eslint-disable strict */
const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/barrett';

  const getItems = function(get, callback) {
    $.getJSON(`${BASE_URL}/items`, data => console.log(data));
  };

  const createItem = function(name, callback) {
      
  };
  
  

  return {
    getItems
  };
}());