import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductCard } from "./ProductCard";

export default class Carrusel extends Component {
  render() {
    const { products } = this.props;
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
          },
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrow: false,
            dots: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrow: false,
          },
        },
      ],
    };
    return (
      <>
        <Slider {...settings}>
          {products.map((product) => (
            <div className="px-2 my-5" key={product.id}>
              <ProductCard
                id={product.id}
                img={product.images[0]}
                price={product.price}
                title={product.title}
                cant={product.cant}
                category={product.category.name}
              />
            </div>
          ))}
        </Slider>
      </>
    );
  }
}
