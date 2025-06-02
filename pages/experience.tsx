const Custom404 = dynamic(import("../src/components/blocks/errors/custom404"));
import dynamic from "next/dynamic";
import React, { useEffect } from 'react'
import { m, useAnimation } from "framer-motion"
import Container from '../src/components/structure/container';
import Section from "../src/components/structure/section"
import { useInView } from 'react-intersection-observer'
import css from '../assets/styles/scss/sections/projects/featured.module.scss'
import about from '../assets/styles/scss/sections/index/about.module.scss';
import cN from "classnames"
import Badges from "../src/components/utils/badge.list"
import { AiFillApi, AiFillGithub, AiFillHtml5, AiFillDatabase } from 'react-icons/ai'
import { FaCss3Alt } from "react-icons/fa";
import {SiMysql, SiPython, SiNextdotjs, SiReact, SiMagento, SiPwa } from "react-icons/si"
import { TbAugmentedReality } from "react-icons/tb";

export default function Experience() {

    const controls = useAnimation();
    const { ref, inView } = useInView({
        "threshold": 0.25,
        "triggerOnce": false
    })

    useEffect(() => {
        if (inView) { controls.start("visible") }
        if (!inView) { controls.start("hidden") }
    }, [controls, inView])

    return (

        <Section classProp={about.section}>
            <Container spacing={['verticalXXLrg']}>
                <Container spacing={['verticalLrg']} classProp={about.experienceContainer}>
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
                                    <h3 className="highlight">Senior Software Engineer | Lead Developer</h3><span className={css.privateOr}>2023-present</span>
                                </div>
                                <div className={cN(css.description)}>
                                    <p><strong>Codilar Technologies | Bengaluru, India</strong></p>
                                </div>
                                <div className={css.stackContainer}>
                                        At Codilar Technologies in Bengaluru, I worked on a range of e-commerce projects across web and mobile platforms,
                                        primarily using <strong>Next.js</strong>, <strong>React</strong>, <strong>Adobe Commerce (Magento)</strong>, and
                                        <strong>React Native</strong>. My role involved optimizing performance, enhancing user experience,
                                        integrating third-party tools, and delivering custom features to meet client requirements.
                                </div>
                                <div className={css.stackContainer}>
                                    <h3 className="text-lg font-semibold mt-6 mb-3 text-gray-800">Key Contributions:</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-2 md:ml-8">
                                    <li>Customized checkout flows and integrated analytics in Next.js applications.</li>
                                    <li>Implemented SSR for SEO and performance improvements.</li>
                                    <li>Worked on Adobe Commerce customizations including email templates and product personalization.</li>
                                    <li>Developed mobile features using React Native with backend integration.</li>
                                    <li>Optimized website performance using lazy loading, image optimization, and third-party script offloading.</li>
                                    <li>Integrated AR features and chatbot scripts in progressive web apps (PWA).</li>
                                    </ul>

                                </div>
                                <Badges list={[
                                    { "key": "javascript", "name": "Javascript", "type": "devicon" },
                                    { "key": "html", "name": "HTML", "type": "devicon", icon: AiFillHtml5 },
                                    { "key": "css", "name": "CSS", "type": "devicon", icon: FaCss3Alt },
                                    { "key": "git", "name": "Git", "type": "devicon" },
                                    { "name": "Github", icon: AiFillGithub },
                                    { "key": "linux", "name": "Linux", "type": "devicon" },
                                    { "key": "jira", "name": "Jira", "type": "devicon" },
                                    { "name": "Millennium", "type": "devicon", icon: AiFillApi },
                                    { "name": "Next.js", "type": "devicon", icon: SiNextdotjs },
                                    { "name": "React", "type": "devicon", icon: SiReact },
                                    { "name": "Adobe Commerce", "type": "devicon", icon: SiMagento },
                                    { "name": "React Native", "type": "devicon", icon: SiReact },
                                    { "name": "PWA", "type": "devicon", icon: SiPwa },
                                    { "name": "AR", "type": "devicon", icon: TbAugmentedReality },
                                ]} block="stack" fullContainer={false} color={false} />
                            </div>
                        </div>
                    </m.section>
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
                                    <h3 className="highlight">Software Engineer</h3><span className={css.privateOr}>2021-2023</span>
                                </div>
                                <div className={cN(css.description)}>
                                    <p><strong>Oracle Cerner | Bengaluru, India</strong></p>
                                </div>
                                <div className={css.stackContainer}>
                                    Gained knowledge on millennium software by performing activities like package installs, Mq upgrade.
                                    Performed production activities like code upgrade, ax upgrade and oracle upgrade
                                    Created a web application using JavaScript and dynamic level coding to create the performance analysis UI, functionality and hosted.
                                    Experienced in integrating external APIs into web applications to fetch and display data, enhancing user experiences.
                                </div>
                                <Badges list={[
                                    { "key": "javascript", "name": "Javascript", "type": "devicon" },
                                    { "key": "html", "name": "HTML", "type": "devicon", icon: AiFillHtml5 },
                                    { "key": "css", "name": "CSS", "type": "devicon", icon: FaCss3Alt },
                                    { "key": "git", "name": "Git", "type": "devicon" },
                                    { "name": "Github", icon: AiFillGithub },
                                    { "key": "linux", "name": "Linux", "type": "devicon" },
                                    { "key": "python", "name": "Python", icon : SiPython },
                                    { "key": "jira", "name": "Jira", "type": "devicon" },
                                    { "name": "Millennium", "type": "devicon", icon: AiFillApi }
                                ]} block="stack" fullContainer={false} color={false} />
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
                                    <h3 className="highlight">Frontend Derveloper</h3><span className={css.privateOr}>2020-2021</span>
                                </div>
                                <div className={cN(css.description)}>
                                    <p><strong>Dell EMC | Bengaluru, India</strong></p>
                                </div>
                                <div className={css.stackContainer}>
                                    Gained functioning of Enterprise storage array i.e., PowerMax and explored the current framework to run commands on it.
                                    Created web application for functionality which includes JS and CSS - ecommerce (menu, banner, cart)
                                    worked on some basic concepts of Machine Learning Algorithms.
                                    Gained knowledge of python and its frameworks.
                                    ReactJS with router, Life cycle, dynamic rendering
                                </div>
                                <Badges list={[
                                    { "key": "javascript", "name": "Javascript", "type": "devicon" },
                                    { "key": "html", "name": "HTML", "type": "devicon", icon: AiFillHtml5 },
                                    { "key": "css", "name": "CSS", "type": "devicon", icon: FaCss3Alt },
                                    { "key": "git", "name": "Git", "type": "devicon" },
                                    { "name": "Github", icon: AiFillGithub },
                                    { "name": "PwoerMax", icon: AiFillDatabase }
                                ]} block="stack" fullContainer={false} color={false} />
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
                                    <h3 className="highlight">Software Engineer Intern</h3>
                                </div>
                                <div className={cN(css.description)}>
                                    <p><strong>For Ur Service | Mysuru, India</strong></p>
                                </div>
                                <div className={css.stackContainer}>
                                    Learnt about DOM & Web structure.
                                    Understandability towards Various types web technologies.
                                    Worked on various modules which occupied with CSS and html works.
                                    Self Learnt:
                                    Personal Skill Development towards Data Analysis, PowerBi, Data Extractions, and Transformation with various approaches
                                    Learnt Python and made some applications with tkinter, and mysql.
                                    Learnt CSS, Html to make my own Portfolio
                                </div>
                                <Badges list={[
                                    { "key": "javascript", "name": "Javascript", "type": "devicon" },
                                    { "key": "html", "name": "HTML", "type": "devicon", icon: AiFillHtml5 },
                                    { "key": "css", "name": "CSS", "type": "devicon", icon: FaCss3Alt },
                                    { "key": "git", "name": "MySQL", icon : SiMysql },
                                    { "name": "Github", icon: AiFillGithub },
                                ]} block="stack" fullContainer={false} color={false} />
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