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
const Events_card = (props) => {
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
					<Typography variant='h5'>{props.name}</Typography>
					<Typography variant='body2' color='text.secondary'>
						{props.shtdesc}
					</Typography>
				</CardContent>
			</Card>

			<Modal open={open} onClose={handleClose}>
				<Box
					sx={{
						modalStyle,
						maxWidth: '70vw',
						maxHeight: '80vh',
						overflowY: 'auto',
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						p: 4,
						'&::-webkit-scrollbar': {
							width: '8px',
						},
						'&::-webkit-scrollbar-thumb': {
							backgroundColor: 'rgb(139, 117, 97)',
							borderRadius: '4px',
						},
						bgcolor: 'background.paper',
						boxShadow: 24,
						borderRadius: 2,
					}}
					className='modal'
				>
					<Typography variant='h2'>{props.name}</Typography>
					<Box sx={{ mt: 2 }}>
						{props.details.map((paragraph, index) => (
							<Typography key={index} variant='body2' paragraph>
								{paragraph}
							</Typography>
						))}
					</Box>
					{props.rules && props.rules.length > 0 && (
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
								{props.rules.map((paragraph, index) => (
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
					<Button
						variant='outlined'
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

export default Events_card;
