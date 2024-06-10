import Product from './Product';
import Slider from 'react-slick';
//import { NextBtn, PreviousBtn } from '../Banner/Banner';
import { Link } from 'react-router-dom';
import { offerProducts } from '../../../utils/constants';
import { getRandomProducts } from '../../../utils/functions';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const NextBtn = ({ className, onClick, currentSlide, slideCount, slidesToShow }) => {
    return (
        currentSlide + slidesToShow < slideCount && (
            <button className={className} onClick={onClick}>
                <ArrowForwardIosIcon />
            </button>
        )
    );
};

const PreviousBtn = ({ className, onClick, currentSlide }) => {
    return (
        currentSlide > 0 && (
            <button className={className} onClick={onClick}>
                <ArrowForwardIosIcon style={{ transform: 'rotate(180deg)' }} />
            </button>
        )
    );
};

export const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    swipe: false,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const DealSlider = ({ title }) => {

    const customSettings = {
        ...settings,
        nextArrow: <NextBtn slideCount={offerProducts.length} slidesToShow={settings.slidesToShow} />,
        prevArrow: <PreviousBtn />
    };

    return (
        <section className="bg-white w-full shadow overflow-hidden">
            {/* <!-- header --> */}
            <div className="flex px-6 py-3 justify-between items-center">
                <h1 className="text-xl font-medium">{title}</h1>
                <Link to="/products" className="bg-primary-blue w-10 h-10 flex items-center justify-center text-xs font-medium text-white px-5 py-2.5 rounded-full shadow-sm"><ArrowForwardIosIcon style={{fontSize : '16px'}}/></Link>
            </div>
            <hr />
            {/* <!-- header --> */}

            <Slider {...customSettings}>
                {getRandomProducts(offerProducts, 12).map((item, i) => (
                    <Product {...item} key={i} />
                ))}
            </Slider>

        </section>
    );
};

export default DealSlider;