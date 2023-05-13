import React from "react";
import styles from './MainReview.module.css'
import Sliders from "./slider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainReview = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "grey" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "grey" }}
                onClick={onClick}
            />
        );
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div>
            <section className={styles.review}>
                <div className="container">
                    <Slider

                        className={styles.review__slider}
                        { ...settings }
                    >
                        <div className={styles.review__slider_item}>
                            <div className="slider-text">
                                <p className={styles.review__box_text}>Lorem Ipsum is simply dummy text of the
                                    printing
                                    and
                                    typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is
                                    simply
                                    dummy
                                    text of the printing and typesetting industry. Lorem Ipsum is simply dummy text
                                    of
                                    the
                                    printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                    dummy Lorem
                                    Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <h3 className={styles.review__box_user}>Alexandr Ivchenko</h3>
                                <h5 className={styles.review__box_user_profession}>Businessman</h5>
                            </div>
                            <img src="img/human.png" alt="" className="review-img"/>
                        </div>
                        <div className={styles.review__slider_item}>
                            <div className="slider-text">
                                <p className={styles.review__box_text}>Lorem Ipsum is simply dummy text of the
                                    printing
                                    and
                                    typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is
                                    simply
                                    dummy
                                    text of the printing and typesetting industry. Lorem Ipsum is simply dummy text
                                    of
                                    the
                                    printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                    dummy Lorem
                                    Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <h3 className={styles.review__box_user}>Alexandr Ivchenko</h3>
                                <h5 className={styles.review__box_user_profession}>Businessman</h5>
                            </div>
                            <img src="img/human.png" alt="" className="review-img"/>
                        </div>
                        <div className={styles.review__slider_item}>
                            <div className="slider-text">
                                <p className={styles.review__box_text}>Lorem Ipsum is simply dummy text of the
                                    printing
                                    and
                                    typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is
                                    simply
                                    dummy
                                    text of the printing and typesetting industry. Lorem Ipsum is simply dummy text
                                    of
                                    the
                                    printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                    dummy Lorem
                                    Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <h3 className={styles.review__box_user}>Alexandr Ivchenko</h3>
                                <h5 className={styles.review__box_user_profession}>Businessman</h5>
                            </div>
                            <img src="img/human.png" alt="" className="review-img"/>
                        </div>
                    </Slider>
                </div>
            </section>

        </div>
    );
};

export default MainReview;
