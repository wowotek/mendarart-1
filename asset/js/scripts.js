const parallaxes = [
    "/asset/img/parallax/0.png",
    "/asset/img/parallax/1.png",
    "/asset/img/parallax/2.png",
    "/asset/img/parallax/3.png",
    "/asset/img/parallax/4.png",
    "/asset/img/parallax/5.png",
    "/asset/img/parallax/6.png",
    "/asset/img/parallax/7.png",
];

function tsr(translation) {
    return "translateY(" + (translation) + "px)" ;
}

class L {
    constructor() {
        this.__l = [];
    }

    push(p) {
        this.__l.push(p);
    }

    update() {
        for(const i of this.__l) {
            i.update();
        }
    }
}

const Layers = new L();

class ParallaxLayer {
    constructor(element_id, tsX = 0, tsY = 0, tsZ = 0, scX = 1, scY = 1, rotX = 0, rotY = 0, rotZ = 0) {
        this.element_id = element_id;
        this.tsX = tsX;
        this.tsY = tsY;
        this.tsZ = tsZ;
        this.scX = scX;
        this.scY = scY;
        this.rotX = rotX;
        this.rotY = rotY;
        this.rotZ = rotZ;
        Layers.push(this);
    }
    
    update() {
        const x = `translateX(${this.tsX}px) translateY(${this.tsY}px) translateZ(${this.tsZ}px) scaleX(${this.scX}) scaleY(${this.scY})`;
        document.getElementById(this.element_id).style.transform = x;
    }

    translate({x = null, y = null}) {
        this.tsX = x == null ? this.tsX : x;
        this.tsY = y == null ? this.tsY : y;
    }

    scale({x = null, y = null}) {
        this.scX = x == null ? this.scX : x;
        this.scY = y == null ? this.scY : y;
    }

    rotate({x = 0, y = 0, z = 0}) {
        this.rotX = x == null ? this.rotX : x;
        this.rotY = y == null ? this.rotY : y;
        this.rotZ = z == null ? this.rotZ : z;
    }

    hide() {
        document.getElementById(this.element_id).style = "display: none";
    }

    show() {
        document.getElementById(this.element_id).style = "display: block";
    }
}

$(document).ready(() => {
    let parent = document.getElementById("parallax-layers");

    const p0 = new ParallaxLayer(`parallax-layer-0`);
    const p1 = new ParallaxLayer(`parallax-layer-1`);
    const p2 = new ParallaxLayer(`parallax-layer-2`);
    const p3 = new ParallaxLayer(`parallax-layer-3`);
    const p4 = new ParallaxLayer(`parallax-layer-4`);
    const p5 = new ParallaxLayer(`parallax-layer-5`);
    const p6 = new ParallaxLayer(`parallax-layer-6`);
    const ms = new ParallaxLayer(`mouse_scroll`);

    window.addEventListener("scroll", () => {
        p0.translate({y: -(window.pageYOffset / 1.4)});
        p1.translate({y: -(window.pageYOffset / 1.9)});
        p2.translate({y: -(window.pageYOffset / 1.6)});
        p3.translate({y: -(window.pageYOffset / 1.2)});
        p4.translate({y: -(window.pageYOffset / 1.9)});
        p5.translate({y: -(window.pageYOffset / 3.0)});
        ms.translate({y: window.pageYOffset / 0.5});

        if(window.pageYOffset <= window.innerHeight) {
            p0.show();
            p1.show();
            p2.show();
            p3.show();
            p4.show();
            p5.show();
            p6.show();
            ms.show();

            p6.translate({y: 0});
        } else if (window.pageYOffset > window.innerHeight && window.pageYOffset <= (2.5 * window.innerHeight)) {
            p6.translate({y: -(window.pageYOffset)});
            // p6.scale({x: 10, y: 10});
            ms.hide();
        } else if (window.pageYOffset > (2.5 * window.innerHeight)) {
            p0.hide();
            p1.hide();
            p2.hide();
            p3.hide();
            p4.hide();
            // p5.hide();
            
            p6.hide();
        }
        Layers.update();
    });

    window.addEventListener("deviceorientation", (ev) => {
        const alpha = ev.alpha;
        const beta = ev.beta;
        const gamma = ev.gamma;
    }, true);
});