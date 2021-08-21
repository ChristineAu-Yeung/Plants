import { useState } from "react";

function DropDown(props) {

	const [active, setActive] = useState(false);

	return (
		<div className="dropDown" onMouseLeave={() => setActive(false)}>
			<div className="dropDownTitle" onClick={() => setActive(!active)}>Types</div>
			<div className={`dropDownContent ${active ? 'active' : ''}`}>
				<a href="/Ficus">Ficus</a>
				<a href="/Philodendron">Philodendron</a>
			</div>
		</div>
	)
}

export default DropDown;