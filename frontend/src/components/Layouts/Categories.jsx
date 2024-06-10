import mobiles from '../../assets/Categories/mobiles.jpeg';
import fashion from '../../assets/Categories/fashion.jpeg';
import electronics from '../../assets/Categories/electronics.png';
import home from '../../assets/Categories/home.png';
import appliances from '../../assets/Categories/appliances.jpeg';
import furniture from '../../assets/Categories/furniture.png';
import beauty from '../../assets/Categories/beauty.jpeg';
import grocery from '../../assets/Categories/grocery.png';
import { Link } from 'react-router-dom';

const catNav = [
    {
        name: "Mobiles",
        icon: mobiles,
    },
    {
        name: "Fashion",
        icon: fashion,
    },
    {
        name: "Electronics",
        icon: electronics,
    },
    {
        name: "Home",
        icon: home,
    },
    {
        name: "Appliances",
        icon: appliances,
    },
    {
        name: "Furniture",
        icon: furniture,
    },
    {
        name: "Beauty",
        icon: beauty,
    },
    {
        name: "Grocery",
        icon: grocery,
    },
]

const Categories = () => {
    return (
        <section className="hidden sm:block bg-white mt-10 mb-4 min-w-full px-12 py-1 shadow overflow-hidden">

            <div className="flex items-center justify-between mt-4">

                {catNav.map((item, i) => (
                    <Link to={`/products?category=${item.name}`} className="flex flex-col gap-1 items-center p-2 group" key={i}>
                        <div className="h-16 w-16">
                            <img draggable="false" className="h-full w-full object-contain" src={item.icon} alt={item.name} />
                        </div>
                        <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">{item.name}</span>
                    </Link>
                ))}

            </div>
        </section>
    );
};

export default Categories;