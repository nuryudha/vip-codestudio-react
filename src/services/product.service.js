import axios from "axios";

export function getProducts(callback) {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log(res);
      callback(res.data); // Pass the data to the callback function
    })
    .catch((err) => {
      console.error(err);
      //   callback([]); // Pass an empty array in case of an error
    });
}

export function getDetailProduct(id, callback) {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      // console.log(res);
      callback(res.data); // Pass the data to the callback function
    })
    .catch((err) => {
      console.error(err);
      //   callback([]); // Pass an empty array in case of an error
    });
}
