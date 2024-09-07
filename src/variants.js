const fadeIn = (direction = "up", delay = 0.3) => {
    return {
      hidden: {
        opacity: 0,
        y: direction === "up" ? 20 : -20,  // Change this value based on direction
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: delay,
        },
      },
    };
  };

  export default fadeIn