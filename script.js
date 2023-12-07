const myLibrary = [];

class Book {
    constructor(title, author, page, read) {
        this.title = title,
        this.author = author,
        this.page = page,
        this.read = read
    }
}

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
        addBookToLibrary();
        newCard();
    }
)

function addBookToLibrary() {
    let title = (prompt('What is the Title?')).toLowerCase();
    let author = (prompt('Who is the Author?')).toLowerCase();
    let page = (prompt('How many pages is the book?')).toLowerCase();
    let read = (prompt('Have you completed reading?')).toLowerCase();
    let add = new Book(title, author, page, read)
    myLibrary.push(add);
}


let sample1 = new Book('Western Lane', 'Chetna Maroo', '176', 'no');
let sample2 = new Book('Trust', 'Hernan Diaz', 'unknown', 'no');
let sample3 = new Book('Bright young women', 'Jessica Knoll', 'unknown', 'no');
myLibrary.push(sample1, sample2, sample3);  

let parentCard = document.querySelector('.parentCard');
let card = () => {
    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '200px';
        card.style.height = '200px';
        card.textContent = `${myLibrary[i].title} by ${myLibrary[i].author}, Pages: ${myLibrary[i].page}`;
        parentCard.appendChild(card);
        let readStatus = document.createElement('button');
        readStatus.classList.add('readStatus');
        readStatus.style.width = '100px';
        readStatus.style.height = '50px';
        readStatus.textContent = `${myLibrary[i].read}`
        card.appendChild(readStatus);
        readStatus.addEventListener('click', () => {
            if(myLibrary[i].read == 'no') {
                readStatus.textContent = "";
                myLibrary[i].read = 'yes';
                readStatus.textContent = myLibrary[i].read;
            } else if(myLibrary[i].read == 'yes') {
                readStatus.textContent = "";
                myLibrary[i].read = 'no';
                readStatus.textContent = myLibrary[i].read;
            } else {
                return
            }
        })
    }
}
card();

let newCard = () => {
    let card = document.createElement('div');
    card.textContent = `${myLibrary[myLibrary.length-1].title} by ${myLibrary[myLibrary.length-1].author}, Pages: ${myLibrary[myLibrary.length-1].page}, Read: ${myLibrary[myLibrary.length-1].read}`;
    card.classList.add('card');
    card.style.width = '200px';
    card.style.height = '200px';
    parentCard.appendChild(card);
    let readStatus = document.createElement('button');
    readStatus.classList.add('readStatus');
    readStatus.style.width = '100px';
    readStatus.style.height = '50px';
    readStatus.textContent = `${myLibrary[myLibrary.length-1].read}`
    card.appendChild(readStatus);
    readStatus.addEventListener('click', () => {
        if(myLibrary[myLibrary.length-1].read == 'no') {
            readStatus.textContent = "";
            myLibrary[myLibrary.length-1].read = 'yes';
            readStatus.textContent = myLibrary[myLibrary.length-1].read;
        } else if(myLibrary[myLibrary.length-1].read == 'yes') {
            readStatus.textContent = "";
            myLibrary[myLibrary.length-1].read = 'no';
            readStatus.textContent = myLibrary[myLibrary.length-1].read;
        } else {
            return
        }
    })
}

let remove = document.getElementById('remove');
remove.addEventListener('click', () => {
    removeBook();
})

let removeBook = () => {
    let removeBook = prompt('Name of the book you want to remove?');
    for (let i =0; i < myLibrary.length; i++) {
        if (myLibrary[i].title == removeBook) {
            myLibrary.splice(i, 1);
            break;
        }
    }
    removeChild();
    card();
}

let removeChild = () => {
    while(parentCard.firstChild) {
        parentCard.removeChild(parentCard.firstChild);
    }
}
