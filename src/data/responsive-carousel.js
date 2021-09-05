const responsiveCarousel = {
    superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 9,
    partialVisibilityGutter: 50
    },
    desktopL: {
        breakpoint: { max: 3000, min: 2500 },
        items: 8,
        partialVisibilityGutter: 10
        },
    desktopM: {
        breakpoint: { max: 2500, min: 1990 },
        items: 6,
        partialVisibilityGutter: 50
        },
    desktopS: {
    breakpoint: { max: 1990, min: 1315 },
    items: 4,
    partialVisibilityGutter: 50
    },
    tablet: {
    breakpoint: { max: 1315, min: 1024 },
    items: 4,
    partialVisibilityGutter: 10
    },
    tabletV:  {
        breakpoint: { max: 1024, min: 670 },
        items: 3,
        partialVisibilityGutter: 10
        },
    mobileH: {
        breakpoint: { max: 670, min: 464 },
        items: 2,
        partialVisibilityGutter: 30
        },
    mobileV: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 50
    }, 
};

export default responsiveCarousel;