import { useState } from "react";

function DropDown(props) {

	const [active, setActive] = useState(false);	
	// console.log({active});

	return (

		<div className="dropDown" onMouseLeave={() => setActive(false)}>
			<div className="dropDownTitle" onClick={() => setActive(!active)}>Types</div>
			<div className={`dropDownContent ${active ? 'active' : ''}`}>
				<div href="/Ficus">Ficus</div>
				<div href="/Philodendron">Philodendron</div>
			</div>
		</div>
	)
}

export default DropDown;