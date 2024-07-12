

function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".m"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".m" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".m", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".m").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();


}
let tl = gsap.timeline()
let mm = gsap.matchMedia()
function index(params) {
    mm.add("(min-width: 768px)", () => {
        tl.from(
            "nav", {
            y: -100,
            duration: 1,
            ease: Power3,
            opacity: 0,
        }
        )

            .from(
                ".container h1", {
                y: 100,
                duration: 1,
                ease: Power3,
                opacity: 0,
                stagger: 1
            }
            )
            .from(
                ".container h2", {
                y: 100,
                duration: 1,
                ease: Power3,
                opacity: 0,
            }
            )
            .from(
                ".btn", {
                y: 100,
                duration: 1,
                ease: Power3,
                opacity: 0,
            }
            )
            .from(".img img", {
                x: 200,
                duration: 2,
                ease: Power4,
                opacity: 0,
            })

            .from(".main i", {
                y: -20,
                opacity: 0,
                transform: "translate3d(0, 200px, 0)",
                duration: .8,
                repeat: -1
            })

        gsap.from(".cards", {
            scrollTrigger: {
                trigger: ".cards",
                start: `top bottom`,
                end: `bottom top`,
                scroller: ".m",
                // markers:true,
                scrub: .1,
                // pin: true
            },
            // y: 200,
            duration: .5,
            opacity: 0,
            // transform:"scale(0)"
        })



        var clutter = "";
        document.querySelector(".about>h2").textContent.split(" ").forEach(function (d) {
            clutter += `<span> ${d}</span>`;
            document.querySelector(".about>h2").innerHTML = clutter;
        })

        gsap.to(".about>h2>span", {
            scrollTrigger: {
                trigger: '.about>h2>span',
                start: `top bottom`,
                end: `bottom top`,
                scroller: ".m",
                // markers: true,
                scrub: .5,
                // pin: true
            },
            stagger: .2,
            color: "#1c2125",
            duration: .5,

        })
        gsap.from(".left_img>img", {
            scrollTrigger: {
                trigger: '.left_img>img',
                start: `top bottom`,
                end: `bottom top`,
                scroller: ".m",
                // markers: true,
                scrub: .5,
                // pin: true
            },
            transform: "scale(0)",
            duration: .5,
            opacity: 0,
        })

        gsap.from(".contact>h1", {
            scrollTrigger: {
                trigger: '.contact>h1',
                start: `top bottom`,
                end: `bottom top`,
                scroller: ".m",
                // markers: true,
                scrub: .5,
                // pin: true
            },
            opacity: 0.2,
            duration: .5,

        })

        gsap.from(".contact>button", {
            scrollTrigger: {
                trigger: '.contact>button',
                start: `top bottom`,
                end: `bottom top`,
                scroller: ".m",
                // markers: true,
                scrub: .5,
                // pin: true
            },
            duration: .5,
            opacity: 0.2,
        })
    })

    mm.add("(max-width: 767px)", () => {
        tl.from(
            "nav", {
            y: -100,
            duration: 1,
            ease: Power3,
            opacity: 0,
        }
        )

            .from(
                ".container h1", {
                y: 100,
                duration: 1,
                ease: Power3,
                opacity: 0,
            }
            )
            .from(
                ".container h2", {
                y: 100,
                duration: 1,
                ease: Power3,
                opacity: 0,
            }
            )
            .from(
                ".btn", {
                y: 100,
                duration: 1,
                ease: Power3,
                opacity: 0,
            }
            )
        tl.from(".hero img", {
            // y: 100,
            duration: .5,
            ease: Power4,
            opacity: 0,
        })
    })
    var clutter = "";
    document.querySelector(".about>h2").textContent.split(" ").forEach(function (d) {
        clutter += `<span> ${d}</span>`;

        document.querySelector(".about>h2").innerHTML = clutter;


    })

    gsap.to(".about>h2>span", {
        scrollTrigger: {
            trigger: '.about>h2>span',
            start: `top bottom`,
            end: `bottom top`,
            scroller: ".m",
            // markers: true,
            scrub: .5,
            // pin: true
        },
        stagger: .2,
        color: "#ffffff",
        duration: .5,

    })
    document.querySelectorAll(".card").forEach((e) => {
        gsap.from(e, {
            scrollTrigger: {
                trigger: ".cards",
                start: `top bottom`,
                end: `bottom top`,
                scroller: ".m",
                // markers: true,
                scrub: .5,
                // pin: true
            },
            opacity: 0,
            duration: .5,
        })
    })
    document.querySelector("#menu").addEventListener("click", () => {
        gsap.to(".ham", {
            left: 0, duration: 0.5, ease: 'power2.inOut'
        });
    })
    document.querySelector("#close").addEventListener("click", () => {
        gsap.to(".ham", {
            left: '-500px', duration: 0.5, ease: 'power2.inOut'
        });
    })

}







loco()
index()




