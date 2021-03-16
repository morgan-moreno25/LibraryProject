import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Content from './components/content';

export interface Book {
	title: string;
	author: string;
	isRead: boolean;
}

export default function App() {
	const [books, setBooks] = useState<Array<Book>>([]);

	const saveBooksToLocalStorage = (): void => {
		localStorage.setItem('books', JSON.stringify(books));
	};
	const getBooksFromLocalStorage = (): Array<Book> => {
		if (localStorage.getItem('books')) {
			return JSON.parse(localStorage.getItem('books') as string) as Array<Book>;
		} else {
			saveBooksToLocalStorage();
			return [];
		}
	};

	useEffect(() => {
		const data = getBooksFromLocalStorage();
		setBooks(data);
	}, [localStorage.getItem('books')]);

	const addBook = (book: Book): void => {
		setBooks([...books, book]);
		saveBooksToLocalStorage();
	};

	return (
		<div id='app'>
			<Header />
			<Content books={books} addBook={addBook} />
			<Footer />
		</div>
	);
}
