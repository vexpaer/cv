(() => {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;

  if (!gsap || !ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  const motion = gsap.matchMedia();

  motion.add('(prefers-reduced-motion: no-preference)', () => {
    const sections = gsap.utils.toArray('.section');
    const initiallyVisible = [];
    const deferred = [];

    for (const section of sections) {
      const { top } = section.getBoundingClientRect();
      if (top < window.innerHeight * 0.9) initiallyVisible.push(section);
      else deferred.push(section);
    }

    const intro = gsap.timeline({
      defaults: {
        duration: 0.62,
        ease: 'back.out(1.16)'
      }
    });

    intro
      .from('.topbar', {
        autoAlpha: 0,
        y: -12,
        duration: 0.42,
        ease: 'power2.out'
      })
      .from('.identity', {
        autoAlpha: 0,
        y: 18,
        scale: 0.995
      }, '-=0.18');

    if (initiallyVisible.length) {
      intro.from(initiallyVisible, {
        autoAlpha: 0,
        y: 28,
        scale: 0.992,
        stagger: 0.11,
        duration: 0.64
      }, '-=0.24');
    }

    for (const section of deferred) {
      gsap.from(section, {
        autoAlpha: 0,
        y: 30,
        scale: 0.992,
        duration: 0.68,
        ease: 'back.out(1.14)',
        scrollTrigger: {
          trigger: section,
          start: 'top 88%',
          once: true
        }
      });
    }

    gsap.from('.footer', {
      autoAlpha: 0,
      y: 12,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.footer',
        start: 'top 96%',
        once: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });
})();
