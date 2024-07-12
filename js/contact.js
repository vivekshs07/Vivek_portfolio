
let tl = gsap.timeline()
let mm = gsap.matchMedia()
function contact(params) {
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
            ".about_container>h1", {
            x: -100,
            duration: 1,
            ease: Power3,
            opacity: 0,
        }
        )
            
            .from(
                "form", {
                y: 100,
                duration: 1,
                ease: Power3,
                opacity: 0,
            }
            )
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
        ".about_container>h1", {
        x: -100,
        duration: 1,
        ease: Power3,
        opacity: 0,
    }
    )
        .from(
            "form", {
            y: 100,
            duration: 1,
            ease: Power3,
            opacity: 0,
        }
        )
})

contact()