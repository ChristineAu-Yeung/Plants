import React, { useState } from 'react';

function MobileDropdown() {

	const [active, setActive] = useState(false)

	return (
		<div className="dropDown">
			<div className="dropDownTitle" onClick={() => setActive(!active)}/>
			<div className={`dropDownContent ${active ? 'active' : ''}`}>
				<div href="/Types">Types</div>
				<div href="/Genus">Genus</div>
				<div href="/AddaPlant">Add a Plant</div>
				<input href="/Search"/>
				<button className="navBarButton">Search</button>
			</div>
		</div>
	)
}

export default MobileDropdown;