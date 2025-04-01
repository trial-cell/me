
const words = ["Hello", "أهلًا", "Bonjour", "你好", "Hola", "Ciao", "Olá", "Hello"]; 
let index = 0;
const textElement = document.querySelector(".text");

// ظهور كلمة "Hello" أولاً ب opacity لمدة ثانية
gsap.fromTo(textElement, { opacity: 0 }, { opacity: 1, duration: 0.5 });
setTimeout(() => {
    textElement.textContent = words[index]; // عرض أول كلمة
    gsap.fromTo(textElement, { opacity: 0 }, { opacity: 1, duration: 0.5 }); // تأثير الظهور مع opacity
}, 1000);

function changeWord() {
    index++;
    if (index < words.length) {
        textElement.textContent = words[index];
        gsap.fromTo(textElement, { opacity: 0 }, { opacity: 1, duration: 0.5 }); // تأثير الظهور مع opacity
    } else {
        clearInterval(interval);
        gsap.to(".intro", { scaleY: 0, transformOrigin: "top center", duration: 0.4, ease: "power2.inOut" });
        
var title = new SplitText("#title", { type: "words" });


gsap.fromTo(title.words, 
    {   
        autoAlpha: 0,   
        y: 100,
    },
    {   
        autoAlpha: 1,   
        y: 0,
        stagger: 0.17,
        duration: 1,    
        delay:.2, 
        ease: "power1.out"
    }
);

gsap.fromTo("#title", 
    {   
        autoAlpha: .5,   
    },
    {   
        autoAlpha: 1,   
        duration: 1,    
        repeat: -1,  // ✅ التكرار اللانهائي
        yoyo: true,  // ✅ العودة للخلف بعد كل تكرار
        ease: "power1.inOut" // ✅ تنعيم أفضل للحركة
    }
);

gsap.fromTo(".me",
    {   
        y: 100,
    },
    {   
        autoAlpha: 1,   
        y: 0,
        duration: 2,    
        delay:.2, 
        ease: "power3.out"
    }
);


gsap.fromTo(".icn",
    {   
        y: 100,
    },
    {   
        autoAlpha: 1,   
        y: 0,
        duration: 2,    
        delay:.2, 
        ease: "power3.out"
    }
);
var about = new SplitText("#about", { type: "words" });


gsap.fromTo(about.words, 
    {   
        autoAlpha: 0,   
        y: 5,
    },
    {   
        autoAlpha: 1,   
        y: 0,
        stagger: 0.12,
        duration: .5,    
        delay:0, 
        ease: "power3.out"
    }
);
// نحدد العنصر
const arrow = document.querySelector('.arrow');

// الحركة باستخدام GSAP
gsap.fromTo(arrow, 
    {   
        autoAlpha: 0,   
        rotate: 360,  // دورانه بداية من 90 درجة
        y: 50,  // الحركة في محور X من 200
    },
    {   
        rotate: 0,  // يصبح 0 درجة (واقفة)
        x: 0,  // توقف عند النقطة X=0
        autoAlpha: 1,   
        y: 0,  // يظل ثابتًا في محور Y
        duration: 1,    
        delay:1,
        ease: "power1.out",  // تأثير الحركة
        onComplete: () => {
            // توقيف الحركة للأيقونة
            arrow.setAttribute('trigger', 'loop'); // إيقاف الـ trigger بعد اكتمال الحركة
        }
    }
);

    

    }
}

// تشغيل التبديل بعد عرض كلمة "Hello" لمدة ثانية
let interval = setInterval(changeWord, 200);  // التبديل كل 2 ثانية








document.querySelectorAll(".soft").forEach((softElement) => {
    let soft = new SplitText(softElement, { type: "words" });

    gsap.fromTo(soft.words, 
        {   
            autoAlpha: 0,
            y: 20,
        },
        {   
            autoAlpha: 1,
            y: 0,
            ease: "power3.out",
            stagger: 0.17,
            scrollTrigger: {
                trigger: softElement,
                start: "top 80%", 
                end: "bottom 75%",   
                scrub: 1,      
                markers: false, 
            }
        }
    );
});



document.querySelectorAll(".header").forEach((headerElement) => {
    let header = new SplitText(headerElement, { type: "words" });

    gsap.fromTo(header.words, 
        {   
            autoAlpha: 0,
            y: 20,
        },
        {   
            autoAlpha: 1,
            y: 0,
            ease: "power3.out",
            stagger: 0.17,
            scrollTrigger: {
                trigger: headerElement,
                start: "top 80%", 
                end: "bottom 75%",   
                scrub: 1,      
                markers: false, 
            }
        }
    );
});



document.querySelectorAll(".note").forEach((noteElement) => {
    let note = new SplitText(noteElement, { type: "words" });

    gsap.fromTo(note.words, 
        {   
            autoAlpha: 0,
            y: 20,
        },
        {   
            autoAlpha: 1,
            y: 0,
            ease: "power3.out",
            stagger: 0.17,
            scrollTrigger: {
                trigger: noteElement, // ✅ التصحيح هنا
                start: "top 80%", 
                end: "bottom 75%",   
                scrub: 1,      
                markers: false, 
            }
        }
    );
});





document.querySelectorAll(".tech-item").forEach((techItem) => {

    gsap.fromTo(techItem, 
        {   
            autoAlpha: 0,
            y: 20,
        },
        {   
            autoAlpha: 1,
            y: 0,
            ease: "power3.out",
            stagger: 0.17,
            scrollTrigger: {
                trigger: techItem, // ✅ التصحيح هنا
                start: "top 80%", 
                end: "bottom 75%",   
                scrub: 1,      
                markers: false, 
            }
        }
    );
});



