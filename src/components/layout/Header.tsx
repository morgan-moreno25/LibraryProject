import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function Header() {
	return (
		<Navbar bg='primary' variant='dark' id='header' className='fixed-top'>
			<h1 className='font-weight-bold'>Library</h1>
		</Navbar>
	);
}
