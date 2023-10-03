import FeaturedProject from '../../blocks/projects/featured'


// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title'

import css from '../../../../assets/styles/scss/sections/projects/featured.module.scss'
import content from '../../../content/projects/featured.json'
import Projects from './projects'
{/* Featured Projects */}
export default function FeaturedProjects() {

	return (
		<Section classProp={css.hasBg}>	
		<Container spacing={'verticalXXXLrg'}>
			<Container spacing={'verticalLrg'}>
				<SectionTitle
					title="Featured Projects"
					preTitle="UI and Frontend Developer { <JS /> >> <React /> >> <NextJs /> }"
					subTitle="Focused on the experience, driven by the engineering { <Node.Js /> }."
				/> 	
				<Projects />
				{	
					content.map( (data, index) => {
						return (
							<FeaturedProject content={data} index={index} key={index} />
						)
					})
				}
			</Container>
			
			<div className={css.bgContainer}>
				<span className={css.orbitalBg}>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div>
			</Container>
		</Section>
	)
}