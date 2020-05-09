require('../config/db')();
const Book = require('../models/Book');
const axios = require('axios');
require('dotenv').config();
const url = `https://www.googleapis.com/books/v1/volumes?q=Story&key=${process.env.GOOGLE_BOOK_API_KEY}`;
let books ;

async function renderBooks (){
    try {
         books = await axios.get(url).then(res => res).then(res=> res.data.items).catch(err => console.error(err));
        const datas = books.map(({volumeInfo:{title,authors,description,imageLinks,categories}}) => [{title,authors,description,imageLinks,categories}]);
        for(var i in datas) {
            Book.create(datas[i]);
        }
     } catch (error) {
         console.error(error);
     }
}

renderBooks();


