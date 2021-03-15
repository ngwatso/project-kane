import React from 'react';

import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<div className="nav-bar">
			<nav>
				<Link to="/" className="home-icon">
					<i
						class="fa fa-home fa-5x nav-icon"
						aria-hidden="true"
					>
						<span className="tooltip">Home</span>
					</i>
				</Link>
				<Link to="/" className="add-icon">
					<i
						class="fa fa-address-card-o fa-5x nav-icon"
						aria-hidden="true"
					>
						<span className="tooltip">Add Associates</span>
					</i>
				</Link>
				<Link to="/" className="attendance">
					<i
						class="fa fa-users fa-5x nav-icon"
						aria-hidden="true"
					>
						<span className="tooltip">Take Attendance</span>
					</i>
				</Link>
				<Link to="/" className="productivity">
					<i
						class="fa fa-bar-chart fa-5x nav-icon"
						aria-hidden="true"
					>
						<span className="tooltip">Productivity</span>
					</i>
				</Link>
				<Link to="/" className="utilization">
					<i
						class="fa fa-truck fa-5x nav-icon"
						aria-hidden="true"
					>
						<span className="tooltip">Utilization</span>
					</i>
				</Link>
			</nav>
		</div>
	);
};

export default Navigation;
