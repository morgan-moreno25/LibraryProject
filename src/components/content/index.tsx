import { FC } from 'react';
import { Book } from '../../App';
import AddBookModal from './AddBookModal';
import BookItem from './BookItem';

interface ContentProps {
	books: Array<Book>;
	addBook: (book: Book) => void;
}

const Content: FC<ContentProps> = ({ books, addBook }) => {
	return (
		<main id='content' className='container'>
			<AddBookModal addBook={addBook} />
			<div id='books' className='mt-2'>
				{books.map((book, index) => (
					<BookItem key={index} book={book} />
				))}
			</div>
		</main>
	);
};

export default Content;
