import React from 'react';
import '../css/home.css';
import {Link} from 'react-router-dom';

const HomePage = ()=>{
    return (
        <div className="jumbotron">
            <div className="ui text menu">
                <div className="item right">
                    <Link to="/" className="link">Home</Link>
                </div>

                <div className="item">
                    <Link to="/about" className="link">About</Link>
                </div>
                <div className="item last-one">
                    <Link to="/project" className="link">Project</Link>
                </div>
            </div>

            <div className="intro ui grid">
                <div className="eight wide column right floated center aligned">
                    <p>
                        Hi, my name is <Link to="/about" className="link">Xilai</Link>. 
                    </p>
                    <p>
                        Welcome! This is a webiste I put up together to help 
                        intelligent people like you to know more
                        about me. Can't wait to show you around!
                    </p>
                    <a href="/about"><i className="arrow right icon big"></i></a>
                </div>
            </div>
            <p className="footer">Sky shows the color of 'love and liberty'. Outside of Powell libray 
                at UCLA. Taken with my iphone maybe 3 years ago.
            </p>
        </div>
        
    );
}

export default HomePage;