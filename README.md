# Sam Bowditch, Tulfa Portfolio Page Assignment

**Hello**, thank you for taking an interest in my application and giving me the
opportunity to showcase my web development skills.

Here I've set out my thought process for each stage of the project, including
decisions around dependencies, project layout, testing, and everything else.

Per the questions around timing, my responses about how I approached the project
are below.

I took around four days to complete this task, or roughly 50 hours in total.

## Initial Requirements Review

### **1. Project Setup and Dependencies**

- **Vite**: Chosen for fast, hot-reloading development and easy plugins. Also preconfigured with TypeScript support.
- **CSS**:  
  - Use of **CSS modules** for scoped and maintainable styling.
  - Style directory to house all styles.
- **Component/Container Architecture**: Splitting components into a stateful container and stateless view for code-maintainability.
- **Utils, Hooks, Shared Directories**:  Shared components, hooks, and functions stored in separate directories. 
- **Elected Dependencies**:
  - **Framer-motion**: Animation library with easy interface and clean animation suite.

### **2. General Thought Process**
- **General Approach**: After checking the Figma content, I decided to split up the page into logical component chunks (slides), generally divided by viewport size. 
- **Lazy Component and Image Loading**:  
  - Implement lazy loading on scroll to ensure efficient loading of images.
- **Component Memoization**: 
  - Memoize components throughout the app, including the main slide, to prevent unnecessary re-renders.
- **Animations**:  
  - Achieve animations through mixture of pure CSS/JS and the Framer Motion library, whenever they make sense. 
  - Make use of useInView and useScroll hooks in framer motion to achieve scroll-based animations.


## **Walkthrough**

The main entry point to the app is in the main.tsx file, import the App component from App.tsx.

App.tsx contains all the component imports and some global state elements. Because there is not 
much state to keep track of, I elected to not use useContext or Redux for simplicity.

Each component is divided into a container and a slide: the container element holds the state
whereas the slide contains the rendered elements.

Here is a summary of my approach to each slide.

### **1. Banner Page (Video + Introducing Title)**
- **Video Loading**:
  - Used framer motion to animate opacity, so video has time to load.
  - Video is used instead of individual frames as unable to implement a smooth user-scrolled progression through the video. 
  - Video automatically starts
- **Framer Motion Animations**:
  - Introducing title overlays video. The font size is synchronized with the scrolling of a hidden element to create to zoom in/out effect.
  - useScroll hook used.

### **2 Virtual Product Photography Slide**
- **Title Color Animation**: Title color animated using moving div behind title. Div has multiple horizontal slices with linear-gradients applied.
- **move-in effect**: The sofa animates into view when loaded.

### **3. Main Content (Text) Slide**
- **Text Highlighting**: As the user scrolls through chunks of text, each chunk gets highlighted in white or greyed out. Style applied view Intersection API. 

### **4. Silo Slide**
- **Animated Elements**: Button triggers elements to move behind a modal.
- **Animated Carousel**: Carousel containing images moves based on clicked button. Displacement values dynamically changed.

### **5. Size Comparison Slide**
- **Animated Images**: When user scrolls into view, overlapping images fade-in. Delay applied to have images arrive at different times.

### **6. Sofa Colors Slide**
- **Animated opacity**: Images of sofas loaded in. Buttons trigger selected sofa to fade-in with opacity set to 1; others set to 0. 

### **7. Sofa Fabric Slide**
- **Animated opacity**: Images of sofas loaded in. Buttons trigger selected sofa to fade-in with opacity set to 1; others set to 0.
- **Animated Choice Container**: Container with choice buttons initially hidden, and fade-in when user hovers over right-half of page. 

### **8. Lifestyle Slide**
- **Scrolling Animations**: Like Banner Slide, hidden div tracks scroll progression. Progression values mapped to scale, opacity, and translation values which animate the elements
on the page.

### **9. Close up Slide**
- **Popup modal**: modal popups up with scrollable container of images.

### **10. Installation Slide**
- **Cycling Images**: buttons to track what images are displayed at any given time. Note I was unable to resolve performance issues associated with handling large images, 
without resorting to compression. 

### **11. Dimensions Slide**
- **Cycling Images**: buttons to track what images are displayed at any given time. Note I was unable to resolve performance issues associated with handling large images, 
without resorting to compression. 

### **12. FlatLay Slide**
- Nothing unique here.

## ** Future Enhancements**
- **Testing Suite**: Implement testing suite, including React Testing Library, going forward.
- **Responsive Design**: Implement **mobile-first** approach to enable page on mobile devices and tablets.
- **Performance**: Review performance linked to image loading and find solutions, including compression.
- **Dynamic Image Loading**: Integration with image sources via APIs or CMS.

## Conclusion
Thank you for giving me the opportunity to work on this assignment, I thoroughly enjoyed the process of coming to the current solution! 

---





