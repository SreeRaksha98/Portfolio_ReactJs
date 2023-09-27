// Core packages
import Image from 'next/image'
import rakshaImage from "./images/photo_5.jpg"
// Imports
import Section from '../../structure/section';
import Container from '../../structure/container';

import SectionTitle from '../../blocks/section.title'

import CopyBlock from '../../blocks/about.copy'

import about from '../../../../assets/styles/scss/sections/index/about.module.scss';
import React from "react";

export default function Home() {
	return (
		<Section classProp={about.section}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="I am a dedicated and passionate software engineer with a diverse skill set and a strong background in frontend development, I am continually seeking opportunities to learn and grow in the fields of data analytics, backend development, web design, and UI. My diverse experiences and skill set make me a valuable asset to any team or project. I look forward to taking on new challenges and contributing to innovative solutions."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<Image src={rakshaImage} width={600} height={800} alt="SreeRaksha M R"   loading="eager" />
					</div>
					<div className= {about.copy}>
						<CopyBlock
							title="Softskills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fas', 'user' ]}
							copy="Soft skills are essential for frontend developers as they often work closely with both technical and non-technical team members 
							and are responsible for creating user-friendly interfaces.  Effective communication is crucial in understanding project requirements, 
							collaborating with designers, and conveying technical information to non-technical stakeholders.  Frontend development often involves 
							troubleshooting issues related to browser compatibility, performance optimization, and user experience. Collaboration with designers, 
							backend developers, and other team members is common in frontend development. These soft skills complement the technical skills of a 
							frontend developer, enabling them to create not only functional but also user-friendly and visually appealing web experiences."
						/>
						<CopyBlock
							title="Hobbies"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'code']}
							copy="I'm a versatile individual with a passion for creativity and self-expression. My journey includes a successful modeling career, having received the Miss Philomena Award twice and actively participating in the Miss Mysore Competition. In addition, I enjoy the art of pencil sketching and find solace in playing the guitar, demonstrating a well-rounded approach to my interests and talents."
						/>
					</div>
				</section>


			</Container>
		</Section>
	)
}
const methods = [
	{ key: 'machinelearning', name: 'Machine Learning', type: 'fad', icon: 'devicon' },
	{ key: 'artificialintelligence', name: 'Artificial Intelligence', type: 'fad', icon: 'devicon' },
	{ key: 'deeplearning', name: 'Deep Learning', type: 'fad', icon: 'devicon' },
	{ key: 'neuralnetworks', name: 'Neural Networks', type: 'fad', icon: 'devicon' },

];
