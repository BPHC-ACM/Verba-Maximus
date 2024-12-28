import React from 'react';
import EventCard from './EventCard';
import { Grid, Container, Typography } from '@mui/material';
import { events } from '../elas-events.json';

function HomeEvents() {
	return (
		<Container maxWidth={false} sx={{ maxWidth: '100%', padding: 0 }}>
			<Grid container spacing={1} justifyContent='center'>
				{events.map((event, index) => (
					<Grid item key={index}>
						<EventCard event={event} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
}

export default HomeEvents;
