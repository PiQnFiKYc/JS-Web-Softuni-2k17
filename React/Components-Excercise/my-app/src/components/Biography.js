import React, { Component } from 'react';
import Character from './Character';
import observer from '../observer';

const characterBio = 'http://localhost:9999/character/';

class Biography extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            char: {}
        }
    }

    componentDidMount() {
        observer.addFunc('viewBiography', this.viewBiography);
    }
    viewBiography = ({ id }) => {
        this.setState({ id: id })
        this.getChar({ id });
    }
    getChar = ({ id }) => {
        fetch(characterBio + id)
            .then(response => {
                response.json()
                    .then(responseJson => {
                        this.setState({
                            char: responseJson
                        });
                    })
            })
    }

    render() {
        let html;
        if (Object.keys(this.state.char).length !== 0) {
            html = (
                <fieldset>
                    {Character({ url: this.state.char.url })}
                    {this.state.char.name}
                    <div>
                        {this.state.char.bio}
                    </div>
                </fieldset>
            )
        };
        return (
            <div>
                {html}
            </div>
        )
    }
}

export default Biography;