const topBar = document.querySelector("#top-bar");

// Handle Top Bar When Scroll
const handleScroll = () => {
  const aTop = window.scrollY === 0;
  topBar.classList.toggle("visible-bar", aTop);
  topBar.classList.toggle("hidden-bar", !aTop);
};

// Event Listeners
window.addEventListener("scroll", () => requestAnimationFrame(handleScroll));
