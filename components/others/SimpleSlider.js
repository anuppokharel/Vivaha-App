import Slider from "react-slick";

const SimpleSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={props.first} />
      </div>
      <div>
        <img src={props.second} />
      </div>
      <div>
        <img src={props.third} />
      </div>
      <div>
        <img src={props.fourth} />
      </div>
      <div>
        <img src={props.first} />
      </div>
    </Slider>
  );
};

export default SimpleSlider;
