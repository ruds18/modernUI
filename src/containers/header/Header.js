import React from 'react'
import '../header/Header.css'
import people from '../../assests/people.png'
import ai from '../../assests/ai.png'

const Header = () => {
    return (
        <div className="gpt3_header section_padding" id="home">
            <div className="gpt3_header-content">
                <h1 className="gradient_text">Let’s Build Something
                amazing with Open AI  and ML</h1>
                <p>AI club is a very new club of VIT Bhopal, for all the futuristic ones. We promise to make systems adaptive through artificial intelligence. We will be organizing webinars, debates, various competitions to show up your skills and improve the abilities to analyze, and develop computational intelligence. Our main goal is to administer you with the industrial challenges for your better future. Everyone will be given an equal opportunity here.</p>
                <div className="gpt3_header-content_input">
                    <input type="email" placeholder="your email" />
                    <button type="submit">Get Started!</button>
                </div>
                <div className="gpt3_header-content_people">
                    <img src={people} alt={people} />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="gpt3_header-img">
                <img src={ai} alt={ai} />
            </div>
        </div>
    )
}

export default Header
