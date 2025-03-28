document.addEventListener("DOMContentLoaded", function () {
    // Wait for the page to fully load
    window.onload = function () {
        const preloader = document.querySelector(".preloader");
        if (preloader) {
            preloader.style.opacity = "0";
            preloader.style.transition = "opacity 0.5s ease-out";
            setTimeout(() => {
                preloader.style.display = "none";
            }, 500); // Matches the transition time
        }
    };
});


// Counter JS

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter-number");
    const speed = 200; // Adjust speed of counting

    const startCounting = (counter) => {
        const target = +counter.getAttribute("data-count");
        let count = 0;
        const increment = target / speed;

        const updateCounter = () => {
            count += increment;
            if (count < target) {
                counter.textContent = Math.ceil(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        updateCounter();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
                observer.unobserve(entry.target); // Ensure it runs only once
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
});


document.addEventListener("DOMContentLoaded", function () {
    const backToTopBtn = document.querySelector(".back-to-top");

    // Show/hide button on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = "1";
            backToTopBtn.style.visibility = "visible";
        } else {
            backToTopBtn.style.opacity = "0";
            backToTopBtn.style.visibility = "hidden";
        }
    });

    // Smooth scroll to top
    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
