import { FC, useState } from 'react';

import { Button, Modal, Form } from 'react-bootstrap';
import { Book } from '../../App';

interface AddBookModalProps {
	addBook: (book: Book) => void;
}

const AddBookModal: FC<AddBookModalProps> = ({ addBook }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [isRead, setIsRead] = useState(false);

	const toggleModal = () => setIsOpen(!isOpen);

	const handleSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		e.preventDefault();
		const book = { title, author, isRead };

		addBook(book);
		setTitle('');
		setAuthor('');
		setIsRead(false);
		toggleModal();
	};

	return (
		<div className='row justify-content-center align-items-center mt-5'>
			<Button variant='success' onClick={toggleModal}>
				Add Book +
			</Button>
			<Modal show={isOpen} onHide={toggleModal} centered>
				<Modal.Title className='text-center'>Enter Book Information</Modal.Title>
				<Modal.Body>
					<Form>
						<Form.Group>
							<Form.Label>Title</Form.Label>
							<Form.Control
								type='text'
								id='title'
								name='title'
								value={title}
								onChange={e => setTitle(e.target.value)}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Author</Form.Label>
							<Form.Control
								type='text'
								id='author'
								name='author'
								value={author}
								onChange={e => setAuthor(e.target.value)}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Check
								type='checkbox'
								label='Have you read this before?'
								checked={isRead}
								onChange={() => setIsRead(!isRead)}
							/>
						</Form.Group>
						<Form.Row className='justify-content-center align-items-center'>
							<Button variant='primary' type='button' className='mx-2' onClick={handleSubmit}>
								Submit
							</Button>
							<Button variant='danger' type='button' onClick={toggleModal} className='mx-2'>
								Cancel
							</Button>
						</Form.Row>
					</Form>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default AddBookModal;
