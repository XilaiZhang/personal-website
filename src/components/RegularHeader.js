import React from 'react';
import {Link} from 'react-router-dom';

const myHeader = ({props})=>{
    const pathname = props.match.path;
    return (
        <div className="ui secondary pointing menu">
            <span className="item">
                <a href="https://github.com/Xilaizhang" target="_blank" rel='noopener noreferrer' style={{color:'black'}}>
                    <i className="github icon large"></i>
                </a>
            </span>
            
            <div className="right menu">
            
                <Link to="/" className="item link">Home</Link>
                <Link to="/about" className={`item link ${pathname==='/about' ? 'active':''}`}>About</Link>
                <Link to="/project" className={`item link ${pathname==='/project' ? 'active':''}`}>Project</Link>
            </div>
            
        </div>
    );
}

export default myHeader;