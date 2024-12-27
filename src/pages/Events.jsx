import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Events_card from '../components/Events_card';
const Events = () => {
	useEffect(() => {
		document.title = 'Verba Maximus - Events';
	}, []);
	const [filterClub, setFilterClub]= useState("");
	return (
		<div className='EVENTS'>
			<Header />
			<div className='heading'>
				<h1>Events</h1>
			</div>
			<div className="mainevents">
				<div className="Searchnfilter">
					<input className="searchinput glass"
                    	type="text"
                    	placeholder="Search events..."
                    	// value={searchTerm}
                   	 	// onChange={(e) => setSearchTerm(e.target.value)}
              	  	/>
					<select class="filter glass"
                    value={filterClub}
                    onChange={(e) => setFilterClub(e.target.value)}
                	>
                    <option value="">Filter by club</option>
                    <option value="ELAS">ELAS</option>
                    <option value="Hindi Tarang">Hindi Tarang</option>
                    <option value="SAFL">SAFL</option>
					<option value="Quiz Club">Quiz Club</option>
					<option value="Fashion Club">Fashion Club</option>
					<option value="Journal Club">Journal Club</option>
					<option value="Music Club">Music Club</option>
                </select>
				</div>
				<div className="ClubEventsHolder">
					{filterClub === "" || filterClub === "ELAS" ? (
                    	<div className="bgbrown">
							<h1 className="Elashead">Elas Events</h1>
							<div className="eventsholder">
								{/* <Events_card/> */}
							</div>
						</div>
                	) : null}
					{filterClub === "" || filterClub === "Hindi Tarang" ? (
                    	<div className="bggreen">
							<h1 className="Elashead">Hindi Tarang Events</h1>
							<div className="eventsholder">
								{/* <Events_card/> */}
							</div>
						</div>
                	) : null}
					{filterClub === "" || filterClub === "SAFL" ? (
                    	<div className="bgbrown">
							<h1 className="Elashead">Safl Events</h1>
							<div className="eventsholder">
								{/* <Events_card/> */}
							</div>
						</div>
                	) : null}
					{filterClub === "" || filterClub === "Quiz Club" ? (
                    	<div className="bggreen">
							<h1 className="Elashead">Quiz Club Events</h1>
							<div className="eventsholder">
								{/* <Events_card/> */}
							</div>
						</div>
                	) : null}
					{filterClub === "" || filterClub === "Fashion Club" ? (
                    	<div className="bgbrown">
							<h1 className="Elashead">Fashion Club Events</h1>
							<div className="eventsholder">
								{/* <Events_card/> */}
							</div>
						</div>
                	) : null}
					{filterClub === "" || filterClub === "Journal Club" ? (
                    	<div className="bggreen">
							<h1 className="Elashead">Journal Club Events</h1>
							<div className="eventsholder">
								{/* <Events_card/> */}
							</div>
						</div>
                	) : null}
					{filterClub === "" || filterClub === "Music Club" ? (
                    	<div className="bgbrown">
							<h1 className="Elashead">Music Club Events</h1>
							<div className="eventsholder">
								{/* <Events_card/> */}
							</div>
						</div>
                	) : null}
				</div>
				
			</div>
			<Footer/>
		</div>
	);
};

export default Events;
