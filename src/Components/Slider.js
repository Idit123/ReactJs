import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import React from 'react'

export default function Slider() {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    const slider = (
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={1000}
        >
            <div data-src="/Images/1.jpg"></div>
            <div data-src="/Images/2.jpg"></div>
            <div data-src="/Images/3.jpg"></div>
            <div data-src="/Images/4.jpg"></div>
            <div data-src="/Images/5.jpg"></div>
        </AutoplaySlider>
    );
    return (
        <div className="slider">
            <div className="inslider">
                {slider}

            </div>
        </div>
    )
}
