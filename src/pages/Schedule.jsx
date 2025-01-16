import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
	Box,
	Typography,
	Card,
	CardContent,
	Grid,
	Divider,
} from '@mui/material';
import scheduleData from '../schedule.json';

const Schedule = () => {
	return (
		<div className='SCHEDULE'>
			<Header />
			<div className='heading'>
				<h1>Schedule</h1>
			</div>
			<Box sx={{ padding: 4 }} className='content'>
				{scheduleData.map((daySchedule, index) => (
					<Box
						key={index}
						sx={{ marginBottom: 4 }}
						className='grid-container'
					>
						<Typography
							className='day-header'
							variant='h4'
							sx={{ marginBottom: 2, fontWeight: 'bold' }}
						>
							{daySchedule.day}
						</Typography>
						<Grid
							container
							spacing={4}
							justifyContent={'center'}
							className='grid'
						>
							{daySchedule.events.map((event, idx) => (
								<Grid item xs={12} sm={6} md={4} key={idx}>
									<Card className='event-card glass'>
										<CardContent className='card-content'>
											<Typography
												variant='h6'
												sx={{ fontWeight: 'bold' }}
											>
												{event.name}
											</Typography>
											<Divider
												sx={{
													marginY: 1,
												}}
												className='divider'
											/>
											<Typography variant='body2'>
												<strong>Time:</strong>{' '}
												{event.startTime} -{' '}
												{event.endTime}
											</Typography>
											{event.club && (
												<Typography
													variant='body2'
													className='clubname'
												>
													<strong>Club:</strong>{' '}
													{event.club}
												</Typography>
											)}
											{event.location && (
												<Typography variant='body2'>
													<strong>Location:</strong>{' '}
													{event.location}
												</Typography>
											)}
										</CardContent>
									</Card>
								</Grid>
							))}
						</Grid>
					</Box>
				))}
			</Box>
			<Footer />
		</div>
	);
};

export default Schedule;
