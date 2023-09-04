import axios from "axios";
const popUp = document.getElementById("popUp");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector('.close');
const modalCard = document.querySelector('.book-card');



async function requestBookData(bookId) {
  return await axios.get(`https://books-backend.p.goit.global/books/${bookId}`)
  .then((resp) => {
      return resp.data
  } )
}

async function createBookCard(bookId) {
  try {
    const data = await requestBookData(bookId);
    console.log(data);
    addMarkup(data);
  } catch (error) {
    console.error(error.message);
  }
  
}

function createMarkup({_id, book_image, title, author, buy_links, description}){
  `<div class="book-id" id=${_id} >
  <img class="cover-book" src="${book_image}" alt="">
      <div class="book-info">
        <h1 class="modal-title">${title}</h1>
        <h3 class="modal-author">${author}</h3>
        <p class="book-descr">${description}</p>
        <ul class="sale-platforms-list">
            ${buy_links}
        </ul>
      </div>
  </div>
      `
 }

 function addMarkup(data){
  modalCard.innerHTML = createMarkup(data)  
 }
  openBtn.addEventListener("click", onBookClick)

 function onBookClick(evt){

  if(evt.target.tagName === "BUTTON"){
    popUp.style.display = "block";
    const bookId = "643282b1e85766588626a0dc";
  
    console.log(bookId);
    createBookCard(bookId)
  }    
}


closeBtn.onclick = function() {
  popUp.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == popUp) {
    popUp.style.display = "none";
  }
}












 