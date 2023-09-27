const Custom404   = dynamic(import ( "../src/components/blocks/errors/custom404"));
import dynamic from "next/dynamic";
import Container from '../src/components/structure/container';
import Section from "../src/components/structure/section"
import about from '../assets/styles/scss/sections/index/about.module.scss';

export default function experience() {
    return (

            <Section classProp={about.section}>
            <Container spacing={['verticalXLrg']}>

            </Container>
            </Section>

    );
};