import React, { useState } from 'react';
import {
	Card,
	CardContent,
	Typography,
	Button,
	Modal,
	Box,
} from '@mui/material';

const modalStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
	borderRadius: 2,
};

function EventCard({ event }) {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div className='EVENTCARD'>
			<Card
				sx={{
					maxWidth: 345,
					margin: 2,
				}}
				className='glass'
				onClick={handleOpen}
			>
				<CardContent>
					<Typography variant='h5'>{event.Name}</Typography>
					<Typography variant='body2' color='text.secondary'>
						{event['Short Description']}
					</Typography>
				</CardContent>
			</Card>
			<Modal open={open} onClose={handleClose}>
				<Box sx={modalStyle} className='modal'>
					<Typography variant='h2'>{event.Name}</Typography>
					<Box sx={{ mt: 2 }}>
						{event.Details.map((paragraph, index) => (
							<Typography key={index} variant='body2' paragraph>
								{paragraph}
							</Typography>
						))}
					</Box>
					<Typography
						variant='body2'
						color='text.primary'
						className='infotext'
						sx={{ mt: 2, fontStyle: 'italic' }}
					>
						For more details, head over to the Events page.
					</Typography>
					<Button
						variant='outlined'
						color='warning'
						onClick={handleClose}
						sx={{ marginTop: 2 }}
					>
						Close
					</Button>
				</Box>
			</Modal>
		</div>
	);
}

export default EventCard;
