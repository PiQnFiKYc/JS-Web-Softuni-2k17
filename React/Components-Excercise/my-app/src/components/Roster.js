import React, {Component} from 'react'
import Character from './Character';
import Biography from './Biography';

import observer from '../observer';


class Roster extends Component {
    constructor(props){
        super(props)

        this.state = {
            rosters:[]
        }
    }

    componentDidMount() {
        this.getRoster();
    }

    async getRoster() {
        try {
            let response = await fetch('http://localhost:9999/roster');
            let responseJson = await response.json();
            this.setState({ rosters: responseJson });
        } catch (err) {
            console.error(err);
        }
    }


    render(){
        return (
            <div className='roster'>
                {this.state.rosters.map((el, i) => {
                    return <span onClick={() => {
                        observer.applyFunc('viewBiography', { id: el.id })
                    }} key={i}>{Character({ url: el.url })}</span>
                })}
            </div>
        )
    }
}


export default Roster