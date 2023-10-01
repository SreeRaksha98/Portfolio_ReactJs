const Custom404 = dynamic(import("../src/components/blocks/errors/custom404"));
import dynamic from "next/dynamic";
import React, {useEffect} from 'react'
import {m, useAnimation} from "framer-motion"
import Container from '../src/components/structure/container';
import Section from "../src/components/structure/section"
import {useInView} from 'react-intersection-observer'
import css from '../assets/styles/scss/sections/projects/featured.module.scss'
import Icon from '../src/components/utils/icon'
import about from '../assets/styles/scss/sections/index/about.module.scss';
import SkillsCard from "../src/components/sections/skills/skills"
import Toolstack from "../src/components/sections/skills/tools"
import SectionTitle from "@/src/components/blocks/section.title";

export default function Skills() {

	const controls = useAnimation();
	const { ref, inView  } = useInView({
		"threshold": 0.25,
		"triggerOnce": false
	})

	useEffect( () => {
		if ( inView ) {	controls.start("visible") }
		if ( !inView ) { controls.start("hidden") }
	}, [ controls, inView ] )

    return (

        <Section classProp={about.section}>
            <Container spacing={['verticalXXLrg']}>
                <Container spacing={['verticalLrg']} classProp={about.experienceContainer}>
                <SectionTitle
                    title="Skills and Tools"
                    // preTitle=""
                    subTitle="Hands-on experience on the below languages and tools"
                />
                    <m.section
                        key={0}
                        className={css.project}
                        framer-motion
                        ref={ref}
                        variants={container}
                        initial={["rest", "hidden"]}
                        whileHover="hover"
                        animate={controls} >

                        <div className={css.experience}>
                            <div className={css.projectHeader}>
                                <div className={css.header}>
                                    <h3 className="highlight">Skills</h3><span className={css.privateOr}>Teckstack</span>
                                </div>
                                <div className={css.description}>
                                <SkillsCard />
                                </div>
                                <m.div className={css.viewProject}>
                                    <Icon icon={['fad', 'arrow-right-to-bracket']} />
                                </m.div>
                            </div>
                        </div>
                    </m.section>
                    <m.section
                        key={1}
                        className={css.project}
                        framer-motion
                        ref={ref}
                        variants={container}
                        initial={["rest", "hidden"]}
                        whileHover="hover"
                        animate={controls} >

                        <div className={css.experience}>
                            <div className={css.projectHeader}>
                                <div className={css.header}>
                                    <h3 className="highlight">Tools</h3><span className={css.privateOr}>Toolstack</span>
                                </div>
                                <div className={css.description}>
                                <Toolstack />
                                </div>
                                <m.div className={css.viewProject}>
                                    <Icon icon={['fad', 'arrow-right-to-bracket']} />
                                </m.div>
                            </div>
                        </div>
                    </m.section>
                </Container>
            </Container>
        </Section>

    );
};

/**
 * Variable which can be accessed in this file
 */
const container = {
    hidden: { 
        transition: {
            delayChildren: 0.125,
            staggerChildren: 0.0625
        }
    },
    visible: {
        transition: {
            delayChildren: 0.125,
            staggerChildren: 0.25,
        }
    },
    rest: {
        transition: {
            delayChildren: 0,
            staggerChildren: 0,
        }
    },
    hover: {
        transition: {
            delayChildren: 0,
            staggerChildren: 0,
        }
    }
}