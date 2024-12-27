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
				<h1 id="mainheadingev">Events</h1>
			</div>
			<div className="mainevents">
				<div className="Searchnfilter">
					<input className="searchinput glass"
                    	type="text"
                    	placeholder="Search events..."
                    	// value={searchTerm}
                   	 	// onChange={(e) => setSearchTerm(e.target.value)}
              	  	/>
					<select className="glass filter"
                    value={filterClub}
                    onChange={(e) => setFilterClub(e.target.value)}
                	>
                    <option className="cluboptions" value="">Filter by club</option>
                    <option className="cluboptions" value="ELAS">ELAS</option>
                    <option className="cluboptions" value="Hindi Tarang">Hindi Tarang</option>
                    <option className="cluboptions" value="SAFL">SAFL</option>
					<option className="cluboptions" value="Quiz Club">Quiz Club</option>
					<option className="cluboptions" value="Fashion Club">Fashion Club</option>
					<option className="cluboptions" value="Journal Club">Journal Club</option>
					<option className="cluboptions" value="Music Club">Music Club</option>
                </select>
				</div>
				<div className="ClubEventsHolder">
					{filterClub === "" || filterClub === "ELAS" ? (
                    	<div className="bgbrown">
							<h1 className="head">Elas Events</h1>
							<div className="eventsholder">
								{/* <Events_card/> */}
							</div>
						</div>
                	) : null}
					{filterClub === "" || filterClub === "Hindi Tarang" ? (
                    	<div className="bggreen">
							<h1 className="head">Hindi Tarang Events</h1>
							<div className="eventsholder">
								{/* <Events_card/> */}
							</div>
						</div>
                	) : null}
					{filterClub === "" || filterClub === "SAFL" ? (
                    	<div className="bgbrown">
							<h1 className="head">Safl Events</h1>
							<div className="eventsholder">
								{/* <Events_card/> */}
							</div>
						</div>
                	) : null}
					{filterClub === "" || filterClub === "Quiz Club" ? (
                    	<div className="bggreen">
							<h1 className="head">Quiz Club Events</h1>
							<div className="eventsholder">
								{/* <Events_card/> */}
							</div>
						</div>
                	) : null}
					{filterClub === "" || filterClub === "Fashion Club" ? (
                    	<div className="bgbrown">
							<h1 className="head">Fashion Club Events</h1>
							<div className="eventsholder">
								{/* <Events_card/> */}
							</div>
						</div>
                	) : null}
					{filterClub === "" || filterClub === "Journal Club" ? (
                    	<div className="bggreen">
							<h1 className="head">Journal Club Events</h1>
							<div className="eventsholder">
								{/* <Events_card/> */}
							</div>
						</div>
                	) : null}
					{filterClub === "" || filterClub === "Music Club" ? (
                    	<div className="bgbrown">
							<h1 className="head">Music Club Events</h1>
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
