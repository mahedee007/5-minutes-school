import React from 'react';
import { Container } from 'react-bootstrap';
import "./About.css"


const About = () => {
    return (
        <Container className="mt-5 about-us">
            <h1 className="text-center" >About Us</h1>
            <hr/>

            <p>We're like Duolingo for learning to code.

When learning to code, most people get stuck on the "bridge" between memorizing syntax and understanding the logic that makes it all work. We believe the most effective way to learn a programming language is to break the process into three phases:
Memorize syntax
Solve problems
Make stuff
Most beginners jump from memorizing syntax directly into making stuff (or trying) without fully understanding how syntax is used to solve problems. In other words, they haven't learned how to think like a programmer, yet they're trying to solve problems like a programmer.
Edabit was created to bridge this gap, while also making the process fun and addictive.</p>
            
        </Container>
    );
};

export default About;