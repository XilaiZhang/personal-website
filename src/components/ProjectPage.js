import React from 'react';
import {useState} from 'react';
import { Segment } from 'semantic-ui-react';
import Subproject from './Subproject';
import RegularHeader from './RegularHeader';
import '../css/project.css';

const projects = [
    {
        title: 'Web development and Scalable internet services',
        content: [
            {
                subtitle: 'mini-reddit app',
                description: 'A mini-reddit app to review soccer players. Built with node.js, express, mongo, html and css. Features include: bar rating, search, ranking, comment etc. Deployed on: https://cfcreviews.herokuapp.com/'
            },
            {
                subtitle:'mini-twitch app',
                description: 'A mini-twitch app (live streaming app) built with React, Redux, json-server and rtmp-server. Features include: live streaming from OBS and google auth. Hosted on a local server. Available on my github.'
            },
            {
                subtitle:'mini-stackoverflow app',
                description: 'A mini-stackoverflow app built with ruby on rails. Performed load testing using Tsung on the following areas: client and server side caching, multithreading, memory caching, horizontal and vertical scaling. Deployed on AWS.'
            },
            {
                subtitle:'mini-IMDb app',
                description: 'A mini-IMDb app (movie app) built on an apache container with mariaDB, using php and mySQL.'
            },
            {
                subtitle:'mini youtube player',
                description: 'mini-youtube built with react hooks. Similar ones (e.g. translation) on my github.'
            }
        ]
    },
    {
        title: 'Operating System, Networking and Compiler related projects',
        content: [
            {
                subtitle:'interpreters and parsers',
                description: 'Wrote multiple interpreters that compile programs from miniJava to Sparrow, Sparrow to Sparrow-V and sparrow-V to risc-V, and a parser for miniJava programs. Implemented visitor design patterns in this Java program.'
            },
            {
                subtitle: "distributed IBP",
                description: 'Implemented distributed Iterative Belief Propagation (IBP) algorithm in C++. Combined try lock strategy with token ring passing topology. Probably the first distributed C++ implementation of IBP on the internet.'
            },
            {
                subtitle: "my TCP",
                description: "Implemented reliable data transfer protocol that supports connection management and congestion control."
            }
        ]
    },
    {
        title: 'Machine learning, Algorithms and Hardware related projects',
        content: [
            {
                subtitle:'Thyroid eye disease classifier',
                description: 'Used deep learning and image registration method to classify photos used in early prediction of Thyroid eye disease, collaborated with Doctor Justin Karlin (UCLA)'
            },
            {
                subtitle: "twitter analyzer",
                description: 'Wrote programs that analyze twitter reviews by applying SVM, KNN, and polynomial regression'
            },
            {
                subtitle: "Algorithm practice",
                description: "practiced and solved 200 kickstart and codejam problems, and 600 other problems. Learned techniques such as range minimum query, sprague grundy theorem, tenary search, segment tree, minimum edge cover and 2 satisfiability etc."
            }
        ] 
    }  
 ];

const colorScheme = ['scooter', 'honey', 'tranquil'];

const ProjectPage = (props)=>{
    const [projectStates, setProjectStates] = useState([true, false, false]);

    const onTitleClick = (index) => {
        let newStates = [...projectStates];
        newStates[index] = !newStates[index];
        setProjectStates(newStates);
    };

    const renderedProjects = projects.map( ( project, index )=> {
        const active = projectStates[index] ? 'active' : '';
        
        return (
            <React.Fragment key={project.title}>
                <div className={`title ${active} ${colorScheme[index]}`}
                    onClick={()=> onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {project.title}
                </div>
                <div className={`content ${active}`} >
                    <Subproject items={project.content} />
                </div>
            </React.Fragment>
        );
    });

    return (
        <Segment>
            <RegularHeader props={props} />
            <p className="project-title"> 
                Selected Projects
            </p>
            <p style={{textAlign: 'center'}}>
                ***click on title/subtitle to expand. click again to collapse.***
            </p>
            <div className="ui grid">
                <div className = "twelve wide column big-box centered">
                    <div className="ui styled accordion">
                        {renderedProjects}
                    </div>
                </div>
            </div>
        </Segment>
    );
}

export default ProjectPage;