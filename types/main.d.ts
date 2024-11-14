declare global {
    // Slide state
    type Slides = "banner" | "introducing";

    type SlideContainerState = {
        currentSlide: Slides;
        slideArray: Slides[];
    }


}

export {};