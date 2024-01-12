import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

function Menu() {
	return (
		<div className="menu">
			<div className="item">
				<span className="title">main</span>
				<Link to="/" className="listItem">
					<img src="../../../public/home.svg" alt="home icon" />
					<span className="listItemTitle">Home</span>
				</Link>
				<Link to="/" className="listItem">
					<img src="../../../public/profile.svg" alt="profile icon" />
					<span className="listItemTitle">Profile</span>
				</Link>
			</div>
		</div>
	);
}

export default Menu;
