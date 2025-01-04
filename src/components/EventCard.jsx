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
	width: '70vw',
	maxHeight: '80vh',
	overflowY: 'auto',
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
	borderRadius: 2,
	'&::-webkit-scrollbar': {
		width: '8px',
	},
	'&::-webkit-scrollbar-thumb': {
		backgroundColor: 'rgb(139, 117, 97)',
		borderRadius: '4px',
	},
};

const EventCard = ({
	event,
	name,
	shtdesc,
	details,
	rules,
	showDetailsFooter,
}) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const eventName = name || event?.Name;
	const shortDescription = shtdesc || event?.['Short Description'];
	const eventDetails = details || event?.Details || [];
	const eventRules = rules || event?.Rules || [];

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
					<Typography variant='h5'>{eventName}</Typography>
					<Typography variant='body2' color='text.secondary'>
						{shortDescription}
					</Typography>
				</CardContent>
			</Card>

			<Modal open={open} onClose={handleClose}>
				<Box sx={modalStyle} className='modal'>
					<Typography variant='h2'>{eventName}</Typography>
					<Box sx={{ mt: 2 }}>
						{eventDetails.map((paragraph, index) => (
							<Typography key={index} variant='body2' paragraph>
								{paragraph}
							</Typography>
						))}
					</Box>

					{eventRules.length > 0 && (
						<>
							<Typography
								variant='h3'
								style={{
									textAlign: 'center',
									fontSize: '1.5rem',
									letterSpacing: '8px',
									textTransform: 'uppercase',
									fontWeight: 400,
									fontFamily: 'Poppins',
									padding: '1rem 0',
								}}
							>
								Rules
							</Typography>
							<Box sx={{ mt: 2 }}>
								{eventRules.map((paragraph, index) => (
									<Typography
										key={index}
										variant='body2'
										paragraph
									>
										{paragraph}
									</Typography>
								))}
							</Box>
						</>
					)}

					{showDetailsFooter && (
						<Typography
							variant='body2'
							color='text.primary'
							className='infotext'
							sx={{ mt: 2, fontStyle: 'italic' }}
						>
							For more details, head over to the Events page.
						</Typography>
					)}

					<Button
						variant='filled'
						color='warning'
						onClick={handleClose}
						sx={{ marginTop: 2 }}
						className='glass'
					>
						Close
					</Button>
				</Box>
			</Modal>
		</div>
	);
};

export default EventCard;
