//assigning an array to store book data
const myLibrary = [];

//declaring a class for a constructor for book data
class Book {
    constructor(title, author, page, read) {
        this.title = title,
        this.author = author,
        this.page = page,
        this.read = read
    }
}

//assiging variable names to dom elements for dom manipulation
const mainCard = document.querySelector('#mainCard');
const addButton = document.getElementById('addButton');
const formContainer = document.createElement('div');
formContainer.id = 'formContainer';


//EVENTLISTENERS:-
//1. Click event for adding a book to the library array
addButton.addEventListener('click', () => {
        addBookForm();
    }
)

//2. Click event for console logging myLibrary array when add button on form is clicked
document.body.addEventListener('click', (event) => {
    if(event.target.id === 'submitButton') {
        const bookForm = document.querySelector('.form');
        if(bookForm.checkValidity() === true) {
            if(document.querySelector('#bookContainer') === null) {
                const bookContainer = document.createElement('div');
                bookContainer.id = 'bookContainer';
                mainCard.prepend(bookContainer);
            }
    
            let titleValue = document.querySelector('#titleInput').value;
            let authorInput = document.querySelector('#authorInput').value;
            let pageInput = document.querySelector('#pageInput').value;
            let readInput = document.querySelector('#readInput').value;
        
            let book = new Book(titleValue, authorInput, pageInput, readInput);
            myLibrary.push(book);
    
            bookDisplay(book);
            removeBookForm();
        } else {
            bookForm.reportValidity();
        }

        event.preventDefault();
    }
})

//3. Click event for removing book from display and from the array
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('removeBook') === true) {
        removeBook(event, myLibrary);
    }
})

//4. Click event for changing the read status of the book
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('bookRead') === true) {
        readStatus(event, myLibrary);
        console.log(myLibrary)
    }
})


//FUNCTIONS:-
//1. Function for creating a form and collecting data to add to library array
function addBookForm() {
    const libraryForm = document.createElement('form');
    libraryForm.classList.add('form');
    const titleLabel = document.createElement('label');
    titleLabel.classList.add('titleLabel');
    titleLabel.innerText = 'What is the Title?';
    titleLabel.htmlFor = 'titleInput';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'titleInput';
    titleInput.minLength = 1;
    titleInput.required = true;
    const authorLabel = document.createElement('label');
    authorLabel.classList.add('authorLabel');
    authorLabel.innerText = 'Who is the Author?';
    authorLabel.htmlFor = 'authorInput'
    const authorInput = document.createElement('input');
    authorInput.id = 'authorInput';
    authorInput.type = 'text';
    authorInput.minLength = 1;
    authorInput.required = true;
    const pageLabel = document.createElement('label');
    pageLabel.classList.add('pageLabel');
    pageLabel.innerText = 'How many pages is the book?';
    pageLabel.htmlFor = 'pageInput';
    const pageInput = document.createElement('input');
    pageInput.id = 'pageInput';
    pageInput.type = 'number';
    pageInput.minLength = 1;
    pageInput.required = true;
    const readLabel = document.createElement('label');
    readLabel.classList.add('readLabel');
    readLabel.innerText = 'Have you completed reading?';
    readLabel.htmlFor = 'readInput';
    const readInput = document.createElement('SELECT');
    readInput.id = 'readInput';
    const yesOption = document.createElement('option');
    yesOption.value = 'yes';
    yesOption.innerText = 'Yes!';
    const noOption = document.createElement('option');
    noOption.value = 'no';
    noOption.innerText = 'No.';
    noOption.selected = true;
    const submitButton = document.createElement('button');
    submitButton.id = 'submitButton';
    submitButton.innerText = 'Submit';

    readInput.appendChild(yesOption);
    readInput.appendChild(noOption);

    libraryForm.appendChild(titleLabel);
    libraryForm.appendChild(titleInput);
    libraryForm.appendChild(authorLabel);
    libraryForm.appendChild(authorInput);
    libraryForm.appendChild(pageLabel);
    libraryForm.appendChild(pageInput);
    libraryForm.appendChild(readLabel);
    libraryForm.appendChild(readInput);
    libraryForm.appendChild(submitButton);

    formContainer.appendChild(libraryForm);

    mainCard.append(formContainer);
}

//2. Function to display library elements 
function bookDisplay(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    const bookTitle = document.createElement('div');
    bookTitle.classList.add('bookTitle');
    bookTitle.innerText = book.title
    const bookAuthor = document.createElement('div');
    bookAuthor.classList.add('bookAuthor');
    bookAuthor.innerText = `By ${book.author}`;
    const bookPage = document.createElement('div');
    bookPage.classList.add('bookPage');
    bookPage.innerText = `${book.page} pages`
    const bookRead = document.createElement('button');
    bookRead.classList.add('bookRead');
    bookRead.innerText = book.read;
    const removeBook = document.createElement('button');
    removeBook.classList.add('removeBook');
    removeBook.innerText = 'Remove';

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPage);
    bookCard.appendChild(bookRead);
    bookCard.appendChild(removeBook);

    bookContainer.appendChild(bookCard);
}

//3. Function to remove book form
function removeBookForm() {
    formContainer.removeChild(formContainer.firstChild);
}

//4. Function to remove book from library and display
function removeBook(event, myLibrary) {
    const removedBook = event.target;
    removedBook.parentElement.parentElement.removeChild(removedBook.parentElement);

    const bookTitle = removedBook.parentElement.firstChild;

    for(let i = 0; i < myLibrary.length; i++) {
        if(myLibrary[i].title === bookTitle.innerText) {
            myLibrary.splice(i, 1);
            console.log(1)
        }
    }
}

//4. Function for changing the read Status of the book
function readStatus(event, myLibrary) {
    const readButton = event.target;
    const bookTitle = readButton.parentElement.firstChild;
    if(readButton.innerText === 'yes') {
        for(let i = 0; i < myLibrary.length; i++) {
            if(myLibrary[i].title === bookTitle.innerText) {
                myLibrary[i].read = 'no';
            }
        }
        readButton.innerText = 'no';
    } else if(readButton.innerText === 'no') {
        for(let i = 0; i < myLibrary.length; i++) {
            if(myLibrary[i].title === bookTitle.innerText) {
                myLibrary[i].read = 'yes';
            }
        }
        readButton.innerText = 'yes';
    }
}