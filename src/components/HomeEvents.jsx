import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import { Grid, Container, Typography } from '@mui/material';
import eventsData from '../events.json';

function HomeEvents() {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		const importantEvents = eventsData.events.filter((event) =>
			event.Tags.includes('Important')
		);
		setEvents(importantEvents);
	}, []);

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
