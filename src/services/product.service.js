import axios from 'axios';

export function getProduct(callback) {
  axios
    .get('https://fakestoreapi.com/products')
    .then((res) => {
      console.log(res);
      callback(res.data); // Pass the data to the callback function
    })
    .catch((err) => {
      console.error(err);
      //   callback([]); // Pass an empty array in case of an error
    });
}
