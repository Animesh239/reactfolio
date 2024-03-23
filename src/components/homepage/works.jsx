import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img src={"https://tse2.mm.bing.net/th?id=OIP.kjCUP06WDUMR88i5wo2SqwHaHa&pid=Api&P=0&h=180"} className="work-image" alt="github" />
							<div className="work-title">Opensource ( GITHUB )</div>
							<div className="work-subtitle">Contributor</div>
							<div className="work-duration">Oct 2022 - Present</div>
						</div>
						<div className="work">
							<img src={"https://media.licdn.com/dms/image/C560BAQGcAaEJSHLSag/company-logo_200_200/0/1630640211241?e=1719446400&v=beta&t=v6fHYwqCh8VCTHrCYNpfHCrL79Zm2bH5l7VrQWvJU_U"} className="work-image" alt="GTA" />
							<div className="work-title">Game to Aim ( GTA )</div>
							<div className="work-subtitle">Full-stack Developer</div>
							<div className="work-duration">Feb 2023 - Present</div>
						</div>
						<div className="work">
							<img src={"https://intellirecruit.co.in/icon.png"} className="work-image" alt="intellirecruit" />
							<div className="work-title">Intellirecruit</div>
							<div className="work-subtitle">Full-stack Developer</div>
							<div className="work-duration">Sept-2023</div>
						</div>
					</div>
				}
			/>
			
		</div>
	);
};

export default Works;
