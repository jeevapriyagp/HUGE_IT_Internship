const form = document.getElementById('book-form');
const bookList = document.getElementById('book-list');
const toggleBtn = document.getElementById('toggle-mode');

document.addEventListener('DOMContentLoaded', loadBooks); // loads content when page is loaded
form.addEventListener('submit', addBook); // submits forms
toggleBtn.addEventListener('click', toggleDarkMode); // toggle button action

function loadBooks() // to load saved books in local storage
{
    const books = JSON.parse(localStorage.getItem('library')) || [];
    books.forEach(book => displayBook(book));

    if (localStorage.getItem('theme') === 'dark') // enables dark mode
    {
        document.body.classList.add('dark');
    }
}

function addBook(e) // to add books to the list
{
    e.preventDefault();
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const status = document.getElementById('status').value;

    if (!title || !author || !status) return;

    const book = { title, author, status };
    displayBook(book);
    saveToLocalStorage(book);
    form.reset();
}

function displayBook(book) // display book list
{
    const li = document.createElement('li');
    li.innerHTML = `
    <span>
      <strong>${book.title}</strong> by ${book.author}
      <em style="color: gray;">[${book.status}]</em>
    </span>
    <button class="delete-btn">Delete</button>
    `;

    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
        removeFromLocalStorage(book);
    });
    bookList.appendChild(li);
}

function saveToLocalStorage(book) // saving data to local storage
{
    const books = JSON.parse(localStorage.getItem('library')) || [];
    books.push(book);
    localStorage.setItem('library', JSON.stringify(books));
}

function removeFromLocalStorage(bookToRemove) // deleting saved books
{
    let books = JSON.parse(localStorage.getItem('library')) || [];
    books = books.filter(book =>
        !(book.title === bookToRemove.title && book.author === bookToRemove.author && book.status === bookToRemove.status)
    );
    localStorage.setItem('library', JSON.stringify(books));
}

function toggleDarkMode() // dark mode 
{
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}
