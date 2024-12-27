import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Events_card from '../components/Events_card';
const Events = () => {
	useEffect(() => {
		document.title = 'Verba Maximus - Events';
	}, []);

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
                    // value={filterClub}
                    // onChange={(e) => setFilterClub(e.target.value)}
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
				<div className="eventsholder">
					{/* <Events_card/> */}
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Events;
