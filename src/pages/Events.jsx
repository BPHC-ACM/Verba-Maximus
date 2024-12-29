import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import eventsData from "../events.json"
import Events_card from '../components/Events_card';

const groupEventsbyClub = (e)=>{
	return e.reduce((groups, event) =>{
		if(!groups[event.Club]){
			groups[event.Club]=[];
		}
		groups[event.Club].push(event);
		return groups;
	}, {});
};
const Events = () => {
	useEffect(() => {
		document.title = 'Verba Maximus - Events';
	}, []);
	const [filter, setFilter]= useState("All");
	const [searchTerm, setSearchTerm]=useState("");
	const filteredEvents = eventsData.filter((event) => {
		const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesFilter = filter == "All" || event.filter == filter;
		return matchesSearch && matchesFilter;
	  });
	
	  const groupedEvents = groupEventsbyClub(filteredEvents);
	return (
		<div className='EVENTS'>
			<Header />
			<div className='heading'>
				<h1 id="mainheadingev">Events</h1>
			</div>
			<div className="mainevents">
				<div className="Searchnfilter">
					<input className="searchinput glass"
                    	type="text"
                    	placeholder="Search events..."
                    	value={searchTerm}
                   	 	onChange={(e) => setSearchTerm(e.target.value)}
              	  	/>
				<div className="filter">
                	<div>Filter:</div>
                	<div className="filterlist glass">
                    	{[
                        	"All",
                        	"Expression",
                        	"Puzzles",
                        	"Literary Arts",
                        	"Discussions",
                        	"Quizzes",
                        	"Traditional",
                    	].map((category) => (
                        	<span
                            	key={category}
                            	onClick={() => 
									setFilter(category)
								
									}
                        	>
                            	{category}
                       		</span>
                    	))}
                	</div>
            </div>
				</div>
				<div className="ClubEventsHolder">
					{Object.keys(groupedEvents).map((club)=>(
						<div key={club}>
							<h2>{club}</h2>
							<div>
								{groupedEvents[club].map((event)=>(
									<div>
										<h3>{event.name}</h3>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
				
			</div>
			<Footer/>
		</div>
	);
};

export default Events;
