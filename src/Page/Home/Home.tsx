import Banner from "../../Component/Banner/Banner";
import Chooseus from "../../Component/Chooseus/Chooseus";
import ContactUs from "../../Component/Contactus/Contactus";
import CouponDiscount from "../../Component/CouponDiscount/Coupondiscount";
import Featured from "../../Component/HomeFeatured/Featured";
import Testimonial from "../../Component/Testimonial/Testimonial";

import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <Testimonial></Testimonial>
      <Chooseus></Chooseus>
      <CouponDiscount></CouponDiscount>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
