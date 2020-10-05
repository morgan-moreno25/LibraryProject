function Book(title, author, rating, pages){
    this.title = title;
    this.author = author;
    this.rating = rating;
    this.pages = pages;
    this.isRead = false;
};
Book.prototype.toggleRead = function(){
    this.isRead ? this.isRead = false : this.isRead = true;
};

class View {
    constructor(){
        this.addBookBtn = document.getElementById('newBookBtn');
        this.bookList = document.getElementById('bookList--books');
        this.modal = document.getElementById('modal');
        this.closeModal = document.getElementById('close-modal');
        this.submitBookBtn = document.getElementById('submitBookBtn');
        this.titleInput = document.getElementById('title');
        this.authorInput = document.getElementById('author');
        this.ratingInput = document.getElementById('rating');
        this.pagesInput = document.getElementById('pages');
    };

    capitalize = (str) => {
        let strArr = str.split('');
        strArr.splice(0, 1, strArr[0].toUpperCase());
        return strArr.join('');
    };
    addEventListeners = () => {
        this.addBookBtn.addEventListener('click', (e) => {
            this.modal.classList.remove('hide');
        });

        this.submitBookBtn.addEventListener('click', (e) => {
            this.submitBookForm();

            this.modal.classList.add('hide');
        });

        this.closeModal.addEventListener('click', (e) => {
            this.modal.classList.add('hide');
        })
    };
    submitBookForm = () => {
        const title = this.titleInput.value;
        const author = this.authorInput.value;
        const rating = this.ratingInput.value;
        const pages = this.pagesInput.value;

        app.addBookToLibrary(title, author, rating, pages);
    };
    createBookElement = (index, data) => {
        const book = document.createElement('div');
        book.dataset.index = index;
        book.classList.add('book');

        const title = document.createElement('div');
        title.classList.add('book-cell');
        title.innerHTML = data.title;
        book.appendChild(title);

        const author = document.createElement('div');
        author.classList.add('book-cell');
        author.innerHTML = data.author;
        book.appendChild(author);

        const rating = document.createElement('div');
        rating.classList.add('book-cell');
        rating.innerHTML = `${data.rating}/5`;
        book.appendChild(rating);

        const pages = document.createElement('div');
        pages.classList.add('book-cell');
        pages.innerHTML = data.pages;
        book.appendChild(pages);

        const isReadCell = document.createElement('div');
        isReadCell.classList.add('book-cell');
        book.appendChild(isReadCell);

        const isRead = document.createElement('button');
        isRead.classList.add('toggle-btn');
        isRead.innerHTML = this.capitalize(String(data.isRead));
        isRead.addEventListener('click', (e) => {
            app.toggleBookRead(index);
        });
        isReadCell.appendChild(isRead);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('book-cell', 'icon-btn');
        deleteBtn.addEventListener('click', (e) => {
            let index = e.target.closest('.book').dataset.index;

            app.deleteBook(index);
        });
        deleteBtn.innerHTML = `<i class="far fa-trash-alt"></i>`;
        book.appendChild(deleteBtn);

        return book;
    };
    clearBookList = () => {
        while(this.bookList.children.length > 0){
            this.bookList.removeChild(this.bookList.firstChild);
        };
    };
    renderBooks = (books) => {
        this.clearBookList();

        for(let i = 0; i < books.length; i++){
            let book = this.createBookElement(i, books[i]);

            this.bookList.appendChild(book);
        };
    };

    init = () => {
        this.addEventListeners();
        this.renderBooks(app.books);
    };
};

class Controller {
    constructor(view){
        this.view = view;
        this.books = [];
    };


    initializeBooks = () => {
        if(!localStorage.getItem('books')){
            localStorage.setItem('books', JSON.stringify([new Book('Initial Book', 'Morgan', '4.3', 434)]));
        };

        this.books = JSON.parse(localStorage.getItem('books'));
    };
    saveToLocalStorage = () => {
        localStorage.setItem('books', JSON.stringify(this.books));
    };
    addBookToLibrary = (title, author, rating, pages) => {
        const book = new Book(title, author, rating, pages);

        this.books.push(book);
        this.saveToLocalStorage();
        view.renderBooks(this.books);
    };
    deleteBook = (index) => {
        this.books.splice(index, 1);
        this.saveToLocalStorage();
        view.renderBooks(this.books);
    };
    toggleBookRead = (index) => {
        this.books[index].isRead ? this.books[index].isRead = false : this.books[index].isRead = true;

        this.saveToLocalStorage();
        view.renderBooks(this.books);
    };


    init(){
        this.initializeBooks();
        view.init();
    };
};

const view = new View();
const app = new Controller(view);

app.init();