import React from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Category from "../../components/category/Category";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Track from "../../components/track/Tracks";
import Testimonial from "../../components/testimonial/Testimonials";
import myContext from "../../context/myContext";


const HomePage = () => {
  

  return <Layout>
    <HeroSection/>
    <Category/>
    <HomePageProductCard/>
    <Track/>
    
    <Testimonial/>
    
  </Layout>;
  
};

export default HomePage;
