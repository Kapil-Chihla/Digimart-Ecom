import { useEffect } from 'react';
import Categories from '../Layouts/Categories';
import Banner from './Banner/Banner';
import DealSlider from './DealSlider/DealSlider';
import ProductSlider from './ProductSlider/ProductSlider';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getSliderProducts } from '../../actions/productAction';
import { useSnackbar } from 'notistack';
import MetaData from '../Layouts/MetaData';

const Home = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { error, loading, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    dispatch(getSliderProducts());
  }, [dispatch, error, enqueueSnackbar]);

  return (
    <>
      <MetaData title="Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!" />
      <Categories />
      <main className="flex flex-col gap-3 px-2 mt-16 sm:mt-2">
        <Banner />
        {!loading && products  && (
          <ProductSlider title={"Suggested for You"} tagline={"Based on Your Activity"} products={products} />
        )}
        <DealSlider title={"Big Discounts"} />
        {!loading && products && (
          <ProductSlider title={"You May Also Like..."} tagline={"Based on Your Interest"} products={products} />
        )}
        <DealSlider title={"Top Brands"} />
        {!loading && products  && (
          <ProductSlider title={"Don't Miss These!"} tagline={"Digimart Specials"} products={products} />
        )}
        <DealSlider title={"Top Offers On"} />
      </main>
    </>
  );
};

export default Home;
