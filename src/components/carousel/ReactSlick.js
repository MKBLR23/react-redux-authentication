import React, {Component} from "react";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import "./index.css";

class ReactSlick extends Component {
    render() {
        let settings = {
            dots: true
        };
        return (
            <div className="container">
                <Slider {...settings}>
                    <div>
                        <img src="http://placekitten.com/g/800/300"/>
                    </div>
                    <div>
                        <img src="http://placekitten.com/g/800/300"/>
                    </div>
                    <div>
                        <img src="http://placekitten.com/g/800/300"/>
                    </div>
                    <div>
                        <img src="http://placekitten.com/g/800/300"/>
                    </div>
                </Slider>
                <div className="wrapper">
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                        the release of
                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div>
                        <div className="nested">
                            <div>
                                Lorem Ipsum
                            </div>
                            <div>
                                Lorem Ipsum
                            </div>
                            <div>
                                Lorem Ipsum
                            </div>
                            <div>
                                Lorem Ipsum
                            </div>
                            <div>
                                Lorem Ipsum
                            </div>
                            <div>
                                Lorem Ipsum
                            </div>
                        </div>
                    </div>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                        the release of
                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                        the release of
                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                        the release of
                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                        the release of
                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </div>
        );
    }
}

export default ReactSlick;