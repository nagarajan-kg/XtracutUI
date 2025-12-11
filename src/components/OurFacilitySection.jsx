"use client"; 
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Autoplay மாட்யூலை இங்கு இறக்குமதி செய்துள்ளீர்கள்
import { Navigation, Autoplay } from "swiper/modules"; 
import styles from "../styles/OurFacilitySection.module.css";

import "swiper/css";
import "swiper/css/navigation";
// Autoplay செயல்பாட்டிற்கு தேவையான CSS-ஐ இங்கே இறக்குமதி செய்கிறோம்
import "swiper/css/autoplay"; 


const facilityImages = [
    { id: 1, src: "/img1.png", title: "Central Library" },
    { id: 2, src: "/img2.jpg", title: "Central Library" },
    { id: 3, src: "/img3.png", title: "Advanced Skill Lab" },
    { id: 4, src: "/img4.jpg", title: "Fostnps0" },
    { id: 5, src: "/img1.png", title: "Campus Life" },
];

const OurFacilitySection = () => {
    const handleFullSectionClick = () => {
        console.log("Full Section Clicked - Navigating...");
    };

    return (
        <section
            className={styles.facilitySectionFullWidth}
            onClick={handleFullSectionClick}
        >
            <div className={styles.facilityContentWrapper}>
                <div className={styles.headerContainer}>
                    <div className={styles.facilityLabelContainer}>
                        <div className={styles.facilityLabelBox}>
                            <p className={styles.facilityLabelText}>Our Facility</p>
                        </div>
                    </div>
                    <h2 className={styles.facilityMainHeading}>
                        Empowering Future Healthcare Professionals
                    </h2>
                    <div className={styles.swiperNavigationCustomContainer}>
                        <button
                            className={`${styles.arrowIcon} ${styles.swiperButtonPrevCustom}`}
                            data-swiper-nav="prev"
                        >
                            &#8592;
                        </button>
                        <button
                            className={`${styles.arrowIcon} ${styles.swiperButtonNextCustom}`}
                            data-swiper-nav="next"
                        >
                            &#8594;
                        </button>
                    </div>
                </div>

                <div className={styles.facilitySliderWrapper}>
                    <Swiper
                        // Autoplay மாட்யூல் மற்றும் Navigation மாட்யூல்
                        modules={[Navigation, Autoplay]} 
                        spaceBetween={20}
                        slidesPerView={1}
                        
                        // Autoplay அமைப்பு
                        autoplay={{
                            delay: 3000, 
                            disableOnInteraction: false, 
                        }}

                        navigation={{
                            nextEl: `.${styles.swiperButtonNextCustom}`,
                            prevEl: `.${styles.swiperButtonPrevCustom}`,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        className={styles.facilitySwiper}
                    >
                        {facilityImages.map((facility) => (
                            <SwiperSlide key={facility.id} className={styles.facilitySlide}>
                                <div className={styles.facilityCard}>
                                    <img
                                        src={facility.src}
                                        alt={facility.title}
                                        className={styles.facilityImage}
                                    />
                                    <div className={styles.facilityCardOverlay}>
                                        <div className={styles.titleWrapper}>
                                            <div className={styles.titleLine}></div> 
                                            <h3 className={styles.facilityCardTitle}>
                                                {facility.title}
                                            </h3>
                                            <div className={styles.titleLine}></div> 
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default OurFacilitySection;