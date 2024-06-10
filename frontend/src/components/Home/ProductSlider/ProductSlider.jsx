import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { getRandomProducts } from '../../../utils/functions';
import { settings } from '../DealSlider/DealSlider';
import Product from './Product';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//import { PreviousBtn,NextBtn } from '../Banner/Banner';

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

const ProductSlider = ({ title, tagline }) => {
    
    const { loading, products } = useSelector((state) => state.products);
   
    const customSettings = {
        ...settings,
        nextArrow: <NextBtn slideCount={products?.length} slidesToShow={settings.slidesToShow} />,
        prevArrow: <PreviousBtn />
    };

    return (
        <section className="bg-white w-full shadow overflow-hidden">
            {/* <!-- header --> */}
            <div className="flex px-6 py-4 justify-between items-center">
                <div className="title flex flex-col gap-0.5">
                    <h1 className="text-xl font-medium">{title}</h1>
                    <p className="text-sm text-gray-400">{tagline}</p>
                </div>
                <Link to="/products" className="bg-primary-blue w-10 h-10 flex items-center justify-center text-xs font-medium text-white px-5 py-2.5 rounded-full shadow-sm"><ArrowForwardIosIcon style={{fontSize : '16px'}}/></Link>
            </div>
            <hr />
            {loading ? null :
                <Slider {...customSettings} className="flex items-center justify-between p-1">
                    {products && getRandomProducts(products, 12).map((product) => (
                        <Product {...product} key={product._id} />
                    ))}
                </Slider>
            }

        </section>
    );
};

export default ProductSlider;