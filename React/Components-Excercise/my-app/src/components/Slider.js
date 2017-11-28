import React, { Component } from 'react';
import left from '../resources/left.png';
import right from '../resources/right.png';

const episodePreview = 'http://localhost:9999/episodePreview/'

class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageId: 0,
            imageUrl: ''
        }
    }

    componentDidMount() {
        this.getEpisode(0);
    }

    changeSlide = (direction) => {
        let id = Number(this.state.imageId);
        if (direction === 'left') {
            id -= 1;
        } else if (direction === 'right') {
            id += 1;
        }
        this.getEpisode(id);
    }

    getEpisode = (id) => {
        fetch(episodePreview + id)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    imageUrl: responseJson.url,
                    imageId: responseJson.id
                });
            })
    }

    render() {
        return (
            <div className='warper'>
                <img className="slider-button case-left" onClick={() => this.changeSlide('left')} src={left} />
                <img className="sliderImg" src={this.state.imageUrl} />
                <img className="slider-button case-right" onClick={() => this.changeSlide('right')} src={right} />
            </div>
        )
    }
}

export default Slider;