import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";

import Room from '@material-ui/icons/Room';
import Visibility from '@material-ui/icons/Visibility';
import MusicOff from '@material-ui/icons/MusicOff';



import chat from "./img/Chat.png"
import eye from "./img/Eye.png"
import mi from "./img/Mi.png"
import res from "./img/Res.png"
import map from "./img/Map.png"
import wall from "./img/Home.jpg"
// core components

import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Parallax from "../Parallax/Parallax.js";
import NavPills from "../NavPills/NavPills.js"

import Nav from "../Nav/Nav.js"
import NavLinks from "../Nav/NavLinks.js"
// sections for this page
import constyles from "./styles/components.js";
import secstyles from "./styles/sections.js" 
const useStylesCon = makeStyles(constyles);
const useStylesSec = makeStyles(secstyles)
const defaultTheme = createMuiTheme({
  primary:{
    main:"#9999ff"
  }
})

export default function Components(props) {
  const constyle = useStylesCon();
  const secstyle = useStylesSec();
  const { ...rest } = props;

  return (
    <ThemeProvider theme={defaultTheme}>

    <div className={constyle.body}>
      <Nav
        brand="See More"
        rightLinks={<NavLinks />}
        fixed
        {...rest}
      />
      <Parallax image={wall}>
        <div className={constyle.container} >
          <GridContainer>
            <GridItem>
              <div className={constyle.brand}>
                <h1 className={constyle.title}>Robel Schwarz</h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>


      <div className={classNames(constyle.main, constyle.dark)}>
        <PageInfo secstyle={secstyle}/>
      </div>
    </div>
    </ThemeProvider>
  );
}


function PageInfo(props) {
  const classes = props.secstyle 
  return (
    <div className={classes.section}>
			<div className={classes.container}>
				<div id="navigation-pills">
					<div className={classes.title}>
						<h3>Projects and Code Snippets</h3>
					</div>
					<div className={classes.title}>
						<h3>
							<small>Web Development</small>
						</h3>
					</div>
					<GridContainer>
						<GridItem xs={12} sm={12} md={8} lg={6}>
							<NavPills
								color="primary"
								tabs={[
									{
										tabButton: "Eye Tracking",
										tabIcon: Visibility,
										tabContent: (
											<div>

											<img src={eye} alt="Eye Tracking" className={classes.imageLeft} />
											<span>
												<p>
													An Eye Tracking software using Opencv4 and Dlib
												</p>
												<br />
												<p>
													A visual overlay of the position of Eyes X and Y coords
												</p>
												<br />
												<a href="https://github.com/Amadeus-Stephen/Ayini-python">View Code</a>
											</span>
											</div>
										)
									},
									{
										tabButton: "Music Installer",
										tabIcon: MusicOff,
										tabContent: (
											<div>

											<img src={mi} alt="Music Installer" className={classes.imageLeft} />
											<span>
												<p>
													Youtube-dl Script to download videos to mp3 file format
												</p>
												<br />
												<p>
													A Command line based script to visually select what video based of 
													youtubes top results. Selection is then passed though youtube dl.
												</p>
												<br/>
												<a href="https://github.com/Amadeus-Stephen/node-dl">View Code</a>
											</span>
											</div>
										)
									},
								]}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={12} lg={6}>
							<NavPills
								color="rose"
								horizontal={{
									tabsGrid: { xs: 12, sm: 4, md: 4 },
									contentGrid: { xs: 12, sm: 8, md: 8 }
								}}
								tabs={[
									{
										tabButton: "Vaccine Finder",
										tabIcon: Room,
										tabContent: (
											<div>

											<img src={map} alt="First slide" className={classes.imageRight} />
											<span>
												<p>
													A Vue js website that renders marks on a openlayers map on Points of Interest 
												</p>
												<br />
												<p>
													uses native javscript geolocation data to find device location.
													uses place api's to find POIs in range of the device
												</p>
												<br />
												<a href="https://github.com/Amadeus-Stephen/vaccine-finder">View Code</a>
											</span>
											</div>
										)
									},
									{
										tabButton: "Chat Board ",
										tabIcon: Dashboard,
										tabContent: (
											<div>
											<img src={chat} alt="First slide" className={classes.imageRight} />
											<span>
												<p>
													Discord like chat application
												</p>
												<br />
												<p>
													Chatboard with user Management and account authentication.
													Sockets for real time messaging and data storage using mongodb

												</p>
												<br />
												<a href="https://github.com/Amadeus-Stephen/node-chat">View Code</a>
											</span>
											</div>
										)
									},
									{
										tabButton: "Student Management System",
										tabIcon: Schedule,
										tabContent: (
											<div>

											<img src={res} alt="Student Management System" className={classes.imageRight} />
											<span>

												<p>
													Student class Management system
												</p>
												<br />
												<p>
													Spring boot as a backend framework for java using a mysql database.
													React Js Frontend. Calls are made using axios and authentication through jwt auth tokens
												</p>
												<br/>
												<a href="https://github.com/Amadeus-Stephen/Resgister">View Code</a>
											</span>
											</div>
										)
									}
								]}
							/>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		</div>
  )
}