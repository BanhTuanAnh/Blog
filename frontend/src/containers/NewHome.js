import React, { Component } from 'react'
import axios from "../axios";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../Css/style.css';
import ImageGallery from 'react-image-gallery';

export default class NewHome extends Component {
    state = {
        images: [],
        image3: []
    }

    componentDidMount() {
        axios.get( "/api/post")
            .then(dt => {
                setTimeout(() => {
                    this.setState({
                        images: dt.data,
                    });
                }, 1000)
            })
            .catch(function (error) {
                console.log(error);
        });
    }

    render() {
        const startlist = this.state.images.length - 3;
        const endlist = this.state.images.length;
        const displayimages = this.state.images.slice(startlist, endlist);
        return (
            <div>
                <Slider autoplay="10">
                    {displayimages.map((article, index) => <div key={index}>
                        {/* <h2 className="center">{article.title}</h2>
                        <span class="helper"></span>
                        <img className="background" src={displayimages[index].listimages[0].images}>
                            <h2 className="center">{article.title}</h2>
                        </img>
                        <h2 className="center">{article.title}</h2> */}
                        <div className="image">
                            <img className="background" src={displayimages[index].listimages[0].images} alt="" />      
                            <h2 className="center"><span>{article.title}</span></h2>
                        </div>
                        <br/>
                    </div>)}
                </Slider>
                {/* <Slider autoplay="10" className="slider-wrapper">
                    {displayimages.map((data, index) => <div key={index} className="slider-content" style={{background: `url('${data.listimages[0].images}') no-repeat center center`}}>
                        

                    </div>)}
                </Slider> */}
                {/* <ImageGallery items={displayimages} /> */}
            </div>
        )
    }
}
