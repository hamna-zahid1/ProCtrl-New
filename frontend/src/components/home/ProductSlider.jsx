import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";
import { selectProducts } from "@/features/product/productSlice";
import ProductGridItem from "@/components/product/ProductGridItem";
import useFilterProducts from "@/hooks/useFilterProducts";

const ProductSlider = () => {
  const products = useSelector(selectProducts);
  const filteredProducts = useFilterProducts(products) || [];
  const swiperRef = useRef(null); // Swiper instance
  const prevRef = useRef(null);  // Previous button ref
  const nextRef = useRef(null);  // Next button ref

  // Initialize navigation and autoplay after Swiper mounts
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
      swiperRef.current.autoplay.start();
    }
  }, [filteredProducts]); // Re-run if products change

  return (
    <div className="mt-14 mb-10 relative">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={18}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 18 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={{
          clickable: true,
          el: ".product-slider-pagination",
        }}
      >
        {filteredProducts.slice(0, 10).map((product) => (
          <SwiperSlide key={product._id}>
            <ProductGridItem
              productId={product._id}
              bgStyle="bg-white dark:bg-dark-primary"
            />
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 text-black dark:text-white rounded-full shadow p-2"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          ref={nextRef}
          className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 text-black dark:text-white rounded-full shadow p-2"
        >
          <ChevronRight size={24} />
        </button>

        {/* Pagination (centered) */}
        <div className="product-slider-pagination mt-6 text-center" />
      </Swiper>
    </div>
  );
};

export default ProductSlider;