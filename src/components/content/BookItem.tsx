import { FC } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Book } from '../../App';

interface BookItemProps {
	book: Book;
}

const BookItem: FC<BookItemProps> = ({ book }) => {
	return (
		<Card className='book mb-2'>
			<Card.Body>
				<p className='h4'>{book.title}</p>
				<p className='h6'>by {book.author}</p>
				<p>{book.isRead ? 'Read' : 'Have not read'}</p>
			</Card.Body>
			<Card.Footer>
				<Button variant='warning' className='mx-2'>
					Edit
				</Button>
				<Button variant='danger' className='mx-2'>
					Delete
				</Button>
			</Card.Footer>
		</Card>
	);
};

export default BookItem;
