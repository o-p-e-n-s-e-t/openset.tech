import Grid from "../components/Grid";
import Column from "../components/Column";
import Section from "../components/Section";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import GlslCanvas from "../lib/GlslCanvas";
import { useRef, useEffect } from "react";
import photoShader from "../utils/photoShader";

const Bio = styled.p`
  margin-top: 0;
  max-width: 660px;
`;

const Who = () => {
  const ref = useRef();
  useEffect(() => {
    // @ts-ignore
    const canvas = new GlslCanvas(ref.current);
    canvas.load(photoShader);
    canvas.setUniform("u_texture", "/static/scott.png");
  }, []);
  return (
    <Section blue>
      <Grid>
        <Column width={12}>
          <SectionTitle>Who</SectionTitle>
        </Column>
      </Grid>
      <Grid>
        <Column width={4} medWidth={5} xSmallWidth={12}>
          <noscript>
            <img
              src="/static/scott.png"
              alt="Photo of Scott Donaldson and Gnocchi the Chihuahua"
            />
          </noscript>
          <canvas
            ref={ref}
            height={600}
            width={600}
            style={{ width: "100%", height: "auto" }}
          />
          <p>
            <b>Scott Donaldson</b>
            <br />
            Principal / Founder
            <br />
            <a href="mailto:scott@openset.tech">scott@openset.tech</a>
          </p>
        </Column>
        <Column width={8} medWidth={7} xSmallWidth={12}>
          <Bio>
            Scott founded Open Set in 2020 after serving as Director of
            Technology at iStrategyLabs (ISL) in Washington, DC. Scott has
            extensive experience as a web and software developer on open-source
            libraries, websites and apps, and design interfaces and prototypes.
            He holds an M.S. in Computational Design from Carnegie Mellon
            University and studied architecture at Columbia University. Scott
            views complexity and systems thinking as integral to his approach on
            every project.
          </Bio>
        </Column>
      </Grid>
    </Section>
  );
};

export default Who;
