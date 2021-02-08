import React from 'react';
import { Segment, Image } from 'semantic-ui-react';
import RegularHeader from './RegularHeader';
import profile from '../images/profile.jpeg';
import school from '../images/school.jpeg';
import kickstart from '../images/kickstart.png';
import '../css/about.css';

const AboutPage = (props)=>{
    return (
        <Segment>
            <RegularHeader props={props} />
            <div className="ui grid">
                <div className = "four wide column image-wrapper middle aligned">
                    <Image src={profile} avatar size='small' className="pic" />
                </div>
                <div className = "twelve wide column education middle aligned">
                    <p>
                    Hello! My name is Xilai Zhang. </p>
                    <p>
                    I am constantly learning and grinding my skills. 
                    It always makes me happy to think that I have become better than I was yesterday! 
                    </p>
                </div>
                <div className="fourteen wide centered column">
                    <div className="ui section divider"></div>
                </div>
                
            </div>
            
            <div className="ui grid">
                <div className = "twelve wide column education middle aligned">
                    <p>
                    Education 
                    </p>
                    <p>
                    I am a master student studying at UCLA, majoring in computer science 
                    with a GPA of 3.9. I completed my bachelor’s degree at UCLA too, 
                    majored in computer engineering and graduated with Latin honors. 
                    Before I came to LA for college, I studied math Olympiads and 
                    attended high school in China. A quote from the wikipedia page 
                    about the high school I attended: “In a 2016 ranking, it ranked 
                    first amongst all high schools in Mainland China.”
                    </p>
                </div>
                <div className = "four wide column image-wrapper middle aligned">
                    <Image src={school} size='small' className="pic-school" />
                </div>
                <div className="fourteen wide centered column">
                    <div className="ui section divider"></div>
                </div>
            </div>

            <div className="ui grid">
                <div className = "four wide column coding middle aligned">
                    <Image src={kickstart} size='small' className="pic-kickstart" />
                </div>
                <div className = "twelve wide column education middle aligned">
                    <p>
                    Coding </p>
                    <p>
                    I am constantly grinding my coding skills by solving 
                    difficult algorithm problems in a limited amount of time. 
                    I also enjoy participating in monthly coding competitions. 
                    It is inspiring to look at different approaches by other 
                    participants, and sometimes discussing and optimizing solutions 
                    help me become friends with aspiring software engineers of 
                    all ages around the globe.
                    </p>
                </div>
                <div className="fourteen wide centered column">
                    <div className="ui section divider"></div>
                </div>
            </div>

            <div className="ui grid">
                <div className = "twelve wide column education middle aligned">
                    <p>
                    Skills 
                    </p>
                    <p>
                    The fast-growing technology motivates me to learn new skills every day. 
                    Along the way I have accumulated experience in C++, Python, Java, React, 
                    Redux, Express, Node.js, Mongo, Ruby on Rails, Tsung, mySQL, PHP, Html, 
                    and CSS. And I am still learning. It is always exciting to learn inventions 
                    that have brought major changes to the industry. 
                    </p>
                </div>
                <div className = "four wide column middle aligned">
                    <i className="massive react icon"></i>
                </div>
            </div>
            
        </Segment>
    );
}

export default AboutPage;