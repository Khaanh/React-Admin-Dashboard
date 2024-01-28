import "./navbar.scss";

function Navbar() {
	return (
		<div className="navbar">
			<div className="logo">
				<img src="logo.svg" alt="logo" />
				<span>Iamadmin</span>
			</div>
			<div className="icons">
				<img src="./public/search.svg" alt="icon" className="icon" />
				<img src="./public/app.svg" alt="icon" className="icon" />
				<img src="./public/expand.svg" alt="icon" className="icon" />
				<div className="notification">
					<img src="./public/notifications.svg" alt="icon" />
					<span>1</span>
				</div>
				<div className="user">
					<img
						src="https://variety.com/wp-content/uploads/2013/08/the-dark-knight-christian-bale.jpg"
						alt="user avatar"
					/>
					<span>Jane</span>
				</div>
				<img src="./public/settings.svg" alt="icon" className="icon" />
			</div>
		</div>
	);
}

export default Navbar;
