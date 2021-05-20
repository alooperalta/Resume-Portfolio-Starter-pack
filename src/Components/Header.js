import React from "react";
import TypeWriter from "react-typewriter";
import Typewriter from 'typewriter-effect';

const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <div className="wrapper">
        <div className="page-header section-dark">
            <div className="filter"></div>
    		<div className="content-center">
    			<div class="container">
    				<div className="title-brand">
            <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            {/* <TypeWriter typing={0.5}>{name ? `I'm ${name}.` : null}</TypeWriter> */}
            <Typewriter
              options={{
                strings: [`I'm ${name}.`, "I'm a #PAPAFan."],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <h3>
            Based in {city}. <span>{occupation}</span>. {description}.
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
    					<div className="fog-low">
    						<img src="http://demos.creative-tim.com/paper-kit-2/assets/img/fog-low.png" alt="" />
    					</div>
    					<div className="fog-low right">
    						<img src="http://demos.creative-tim.com/paper-kit-2/assets/img/fog-low.png" alt="" />
    					</div>
    				</div>
    			</div>
    		</div>
            <div className="moving-clouds">

            </div>
    	</div>
    </div>
    
  );
};

export default Header;
