import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import eventsData from '../events.json';
import Events_card from '../components/Events_card';
import { ClickAwayListener } from '@mui/material';
import { IconClick } from '@tabler/icons-react';

const groupEventsbyClub = (e) => {
	return e.reduce((groups, event) => {
		if (!groups[event.Club]) {
			groups[event.Club] = [];
		}
		groups[event.Club].push(event);
		return groups;
	}, {});
};

const CustomDropdown = ({ categories, filter, setFilter }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleDropdownToggle = () => {
		setIsOpen((prev) => !prev);
	};

	const handleCategorySelect = (category) => {
		setFilter(category);
		setIsOpen(false); // Close dropdown after selection
	};

	return (
		<div className='custom-dropdown'>
			<div
				className='dropdown-header glass'
				onClick={handleDropdownToggle}
			>
				{filter}
			</div>
			{isOpen && (
				<ClickAwayListener onClickAway={() => setIsOpen(false)}>
					<div className='dropdown-list glass'>
						{categories.map((category) => (
							<span
								key={category}
								onClick={() => handleCategorySelect(category)}
								className={filter === category ? 'active' : ''}
							>
								{category}
							</span>
						))}
					</div>
				</ClickAwayListener>
			)}
		</div>
	);
};

const Events = () => {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		document.title = 'Verba Maximus - Events';
	}, []);
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
		};
		handleResize(); // Initial check
		window.addEventListener('resize', handleResize); // Listen for resize
		return () => window.removeEventListener('resize', handleResize); // Cleanup
	}, []);
	const [filter, setFilter] = useState('All Events');
	const [searchTerm, setSearchTerm] = useState('');

	const filteredEvents = eventsData.filter((event) => {
		const matchesSearch = event.name
			.toLowerCase()
			.includes(searchTerm.toLowerCase());
		const matchesFilter = filter == 'All Events' || event.filter == filter;
		return matchesSearch && matchesFilter;
	});

	const groupedEvents = groupEventsbyClub(filteredEvents);
	const categories = [
		'All Events',
		'Expression',
		'Puzzles',
		'Literary Arts',
		'Discussions',
		'Quizzes',
		'Traditional',
	];
	return (
		<div className='EVENTS'>
			<Header />
			<div className='heading'>
				<h1 id='mainheadingev'>Events</h1>
			</div>
			<div className='mainevents'>
				<div className='Searchnfilter'>
					<input
						className='searchinput glass'
						type='text'
						placeholder='Search events...'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<div className='filter'>
						<div>
							{isMobile ? (
								<CustomDropdown
									categories={categories}
									filter={filter}
									setFilter={setFilter}
								/>
							) : (
								<div className='filterlist glass'>
									{categories.map((category) => (
										<span
											key={category}
											onClick={() => setFilter(category)}
											className={
												filter === category
													? 'active'
													: ''
											}
										>
											{category}
										</span>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
				<div className='ClubEventsHolder'>
					<div id='knowmore'>
						<p id='knowmoretext'>
							For additional information, tap on the event
							<IconClick className='handclick' size={20} />
						</p>
					</div>
					{Object.keys(groupedEvents).map((club) => (
						<div
							key={club}
							className={`club-section ${
								['elas', 'quiz club', 'fashion club'].includes(
									club.toLowerCase()
								)
									? 'bgbrown'
									: 'bggreen'
							}`}
						>
							<h2 className='clubname'>{club}</h2>
							<div className='eventsholder'>
								{groupedEvents[club].map((event, index) => (
									<Events_card
										key={index}
										name={event.name}
										shtdesc={event['Short Description']}
										details={event.Details}
										bglink={event.bglink}
										rules={event.rules}
									/>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Events;
