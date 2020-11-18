import React from 'react';
import './cv.css';
import Resume from './Resume';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';

function Cv() {
	return (
		<>
			<nav className="nav_mobile">
				<div className="name_mobile">
					<p>
						<b>
							Verónica <br />
							Marull
						</b>
					</p>
				</div>
				<div className="burger_menu">
					<span class="material-icons">menu</span>
				</div>
			</nav>
			<div className="nav">
				<aside>
					<div className="name">
						<p>
							<b>
								Verónica <br />
								Marull
							</b>
						</p>
					</div>
					<nav className="nav_aside">
						<div>
							<a href="#about">About Me</a>
						</div>
						<div>
							<a href="#resume">Resume</a>
						</div>
						<div>
							<a href="#portfolio">Portfolio</a>
						</div>
						<div className="contact_nav">
							<a href="#contact">Contact</a>
						</div>
					</nav>
				</aside>
				<main>
					<a name="about"></a>
					<AboutMe />
					<a name="resume"></a>
					<Resume />
					<a name="portfolio"></a>
					<Portfolio />
					<a name="contact"></a>
					<Contact />
				</main>
			</div>
		</>
	);
}

export default Cv;
