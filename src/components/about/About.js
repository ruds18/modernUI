import React from 'react'
import '../about/About.css'
import Feature from '../feature/Feature'
const About = () => (
    <div className="gpt3__whatgpt3 section_margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Why AI Club?" text="It creates a great environment for students to discuss and learn about various parts of ML and AI. The club also provides students with resources and guidance to explore specific fields of AIML. Allows for networking between club members for possible project or research collaboration." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient_text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="AI chatbots use machine learning, a capability of AI that makes bots smarter with time and use. " />
      <Feature title="Knowledgebase" text="Our Club constitues with one of the greatest AI and Ml developers" />
      <Feature title="Education" text="AI in education can help automate the grading and assessment of activities like multiple choice questions, fill in the blanks, etc. Another tedious and cumbersome activity for teachers is preparing the report cards of students" />
    </div>
  </div>
);

export default About;