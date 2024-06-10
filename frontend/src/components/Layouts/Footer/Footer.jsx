import { useEffect, useState } from 'react';
import WorkIcon from '@mui/icons-material/Work';
import StarsIcon from '@mui/icons-material/Stars';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpIcon from '@mui/icons-material/Help';
import paymentMethods from '../../../assets/payment-methods.svg';
import { useLocation } from 'react-router-dom';

const footerLinks = [
  {
    title: "about",
    links: [
      {
        name: "Contact Us",
        redirect: "mailto:kapilchihla29@gmail.com",
      },
      {
        name: "About Us",
        redirect: "https://www.linkedin.com/in/kapil-chihla/",
      },
      {
        name: "Careers",
        redirect: "/",
      },
      {
        name: "Corporate Information",
        redirect: "https://github.com/Kapil-Chihla",
      },
    ]
  },
  {
    title: "policy",
    links: [
      {
        name: "Return Policy",
        redirect: "/",
      },
      {
        name: "Terms Of Use",
        redirect: "/",
      },
      {
        name: "Security",
        redirect: "/",
      },
      {
        name: "Privacy",
        redirect: "/",
      },
      {
        name: "Sitemap",
        redirect: "/",
      },
      {
        name: "EPR Compliance",
        redirect: "/",
      },
    ]
  },
  {
    title: "social",
    links: [
      {
        name: "GitHub",
        redirect: "https://github.com/Kapil-Chihla",
      },
      {
        name: "Twitter",
        redirect: "https://x.com/ChihlaKapil",
      },
      {
        name: "Linkedin",
        redirect: "https://www.linkedin.com/in/kapil-chihla",
      }
    ]
  }
]

const Footer = () => {

  const location = useLocation();
  const [adminRoute, setAdminRoute] = useState(false);

  useEffect(() => {
    setAdminRoute(location.pathname.split("/", 2).includes("admin"))
  }, [location]);

  return (
    <>
      {!adminRoute && (
        <>
          <footer className="mt-20 w-full py-1 sm:py-4 px-4 sm:px-12 bg-gray-900 text-gray-300 text-xs border-b border-gray-700 flex flex-col sm:flex-row overflow-hidden">
            <div className="w-full sm:w-7/12 flex flex-col sm:flex-row">
              {footerLinks.map((el, i) => (
                <div className="w-full sm:w-1/5 flex flex-col gap-2 my-3 sm:my-6 ml-5" key={i}>
                  <h2 className="text-gray-500 mb-2 uppercase">{el.title}</h2>
                  {el.links.map((item, i) => (
                    <a href={item.redirect} target="_blank" rel="noreferrer" className="hover:underline" key={i}>{item.name}</a>
                  ))}
                </div>
              ))}
              <div className="hidden sm:flex flex-col items-start gap-2 ml-5 mt-3 sm:mt-6">
                <span>Developed with ❤️ by:</span>
                <a href="https://linkedin.com/in/kapil-chihla" target="_blank" rel="noreferrer">Kapil Chihla</a>
                <a href="mailto:kapilchihla29@gmail.com" target="_blank" rel="noreferrer">kapilchihla29@gmail.com</a>
              </div>
            </div>
            <div className="border-gray-700 h-36 w-1 border-l mr-5 mt-6 hidden sm:block"></div>
            <div className="w-full sm:w-5/12 my-6 mx-5 sm:mx-0 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
              <div className="w-full sm:w-1/2">
                <a href="mailto:kapilchihla29@gmail.com" className="text-gray-500">Mail Us:</a>
                <p className="mt-2 leading-5">Digimart Private Limited,<br />
                  Kapil Chihla<br />
                  Delhi Technological University,<br />
                  Computer Engineering<br />
                </p>
              </div>
              <div className="w-full sm:w-1/2">
                <h2 className="text-gray-500">Registered Office Address:</h2>
                <p className="mt-2 leading-5">Digimart Private Limited,<br />
                  Lorem ipsum dolor sit amet.<br />
                  C Saepe fugiat quidem perspiciatis magni natus<br />
                  Alias, ipsam necessitatibus officia at ex totam provident <br />
                  aliquid, perspiciatis voluptatum,<br />
                  laborum labore delectus repudiandae rem <br />
                  consectetur adipisicing elit<br />
                  Telephone: <a className="text-blue-400" href="tel:18002029898">1800 202 9898</a>
                </p>
              </div>
            </div>
          </footer>
          {/* <!-- footer ends --> */}
          <div className="px-16 py-6 w-full bg-gray-900 hidden sm:flex justify-between items-center text-sm text-gray-300">
            <a href="/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><WorkIcon sx={{ fontSize: "20px" }} /></span> Sell On Digimart
            </a>
            <a href="/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><StarsIcon sx={{ fontSize: "20px" }} /></span> Advertise
            </a>
            <a href="/" rel="noreferrer" target="_blank" className="flex items-center gap-2">
              <span className="text-yellow-400"><CardGiftcardIcon sx={{ fontSize: "20px" }} /></span> Gift Cards
            </a>
            <a href="mailto:kapilchihla29@gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><HelpIcon sx={{ fontSize: "20px" }} /></span> Help Center
            </a>
            <span>&copy; 2024-{new Date().getFullYear()} Digimart.com</span>
            <img draggable="false" src={paymentMethods} alt="Card Payment" />
          </div>
        </>
      )}
    </>
  )
};

export default Footer;
