gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray(".card");

cards.forEach((card, i) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: "top center+=100",
      toggleActions: "play none none none"
    },
    y: -i * 10,
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: "power3.out"
  });

  card.style.zIndex = cards.length - i; // Stack visually
});
