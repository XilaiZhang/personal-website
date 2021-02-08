import React from 'react';

class Subproject extends React.Component{
    constructor(props) {
        super(props);
        this.state = {subProjectStates: []};
    }

    componentDidMount(){
        let initialStates=[];
        for(var i=0;i<this.props.items.length;++i){
            initialStates.push(false);
        }
        initialStates[0]=true;
        this.setState({
            subProjectStates: initialStates
        });
    }

    onTitleClick = (seq, e) => {
        e.preventDefault();
        let newSubProjectStates = [...this.state.subProjectStates];
        newSubProjectStates[seq] = !newSubProjectStates[seq];

        this.setState(state =>({
            subProjectStates: newSubProjectStates
        }));

    };

    renderedItems(){
        return(
            this.props.items.map( ( item, seq )=> {
                const active = this.state.subProjectStates[seq] ? 'active' : '';
                
                return (
                    <React.Fragment key={item.subtitle}>
                        <div className={`title ${active}`}
                            onClick={(e)=> this.onTitleClick(seq, e)}
                        >
                            <i className="dropdown icon"></i>
                            {item.subtitle}
                        </div>
                        <div className={`content ${active}`}
                        >
                            <p>{item.description}</p>
                        </div>
                    </React.Fragment>
                );
            })
        );
    } 
    
    render(){
        return (<div className="ui styled accordion">
            {this.renderedItems()}
        </div>);
    }
};


export default Subproject;