const Custom404 = dynamic(import("../src/components/blocks/errors/custom404"));
import dynamic from "next/dynamic";
import Container from '../src/components/structure/container';
import Section from "../src/components/structure/section"
import about from '../assets/styles/scss/sections/index/about.module.scss';
import {m, useAnimation} from "framer-motion"
import css from '../../../../assets/styles/scss/sections/projects/featured.module.scss'
import Icon from '../../utils/icon'

export default function experience() {

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

    return (

        <Section classProp={about.section}>
            <Container spacing={['verticalXLrg']}>
                <m.section
                    key={0}
                    className={css.project}
                    //framer-motion
                    // ref={ref}
                    variants={container}
                    initial={["rest", "hidden"]}
                    whileHover="hover"
                    animate={controls} >

                    <div className={css.details}>
                        <div className={css.projectHeader}>
                            <div className={css.header}>
                                <h3 className="highlight">{project}</h3><span className={css.privateOr}><i className="devicon-github-plain"></i>{repo}</span>
                            </div>
                            <div className={css.description}>
                                <p><strong>{descriptionTitle}</strong> {description}</p>
                            </div>
                            <div className={css.stackContainer}>
                                <Badges list={stack} block="stack" fullContainer={false} color={false} />
                            </div>
                            <m.div variants={''} className={css.viewProject}>
                                <Icon icon={['fad', 'arrow-right-to-bracket']} />
                            </m.div>
                        </div>
                    </div>

                    <div className={css.imageContainer}>
                        <span className={`${css.imageAnimationContainer}`}>
                            {images.map(({ key, url, hover, h, w }, index) => {
                                hover = (hover === 'left') ? hoverLeft : hoverRight
                                return (
                                    <m.div key={`${index}-${key}`} variants={item}>
                                        <m.div variants={hover}>
                                            <Image src={url} alt="x" height={h} width={w} loading="eager" />
                                        </m.div>
                                    </m.div>
                                )
                            }
                            )}
                        </span>
                    </div>
                </m.section>
            </Container>
        </Section>

    );
};