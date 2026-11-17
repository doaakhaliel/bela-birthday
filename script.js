const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const video = document.getElementById('our-video');
const scene2Music = document.getElementById('scene2-music');

const nextSceneBtn = document.getElementById('next-scene-btn');
const nextToScene4Btn = document.getElementById('next-to-scene4');
const nextToScene5Btn = document.getElementById('next-to-scene5');

const scene1 = document.getElementById('scene1');
const scene2 = document.getElementById('scene2');
const scene3 = document.getElementById('scene3');
const scene4 = document.getElementById('scene4');
const scene5 = document.getElementById('scene5');

// إخفاء كل الصفحات وإظهار الأولى
document.querySelectorAll('.scene').forEach(scene => {
    scene.classList.remove('active');
    scene.style.display = 'none';
});
scene1.classList.add('active');
scene1.style.display = 'flex';

// تشغيل الأغنية
document.body.addEventListener('click', function() {
    if (video.paused) { video.play().catch(e => console.log(e)); }
    if (scene2Music.paused) {
        scene2Music.volume = 0.01;
        scene2Music.play().catch(e => console.log(e));
    }
}, { once: true });

// زرار Yes الأول
yesBtn.addEventListener('click', () => {
    if(video) { video.pause(); video.currentTime = 0; video.muted = true; }
    scene2Music.currentTime = 0; 
    
    scene1.classList.remove('active');
    scene1.style.display = 'none'; 
    
    scene2.classList.add('active');
    scene2.style.display = 'flex';
    scene2Music.volume = 0.6;
    
    let duration = 3 * 1000;
    let end = Date.now() + duration;
    (function frame() {
        confetti({ particleCount: 8, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#ff4081', '#d81b60', '#ffb6c1', '#ffffff', '#ffd700'] });
        confetti({ particleCount: 8, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#ff4081', '#d81b60', '#ffb6c1', '#ffffff', '#ffd700'] });
        if (Date.now() < end) { requestAnimationFrame(frame); }
    }());
});

// زرار No الأول
noBtn.addEventListener('click', () => {
    noBtn.innerHTML = 'Try again! <img src="https://em-content.zobj.net/source/apple/354/face-with-tears-of-joy_1f602.png" class="apple-emoji-btn">';
    setTimeout(() => {
        noBtn.innerHTML = 'No <img src="https://em-content.zobj.net/source/apple/354/woman-raising-hand_1f64b-200d-2640-fe0f.png" class="apple-emoji-btn">';
    }, 1500);
});

// المشهد التاني للتالت
nextSceneBtn.addEventListener('click', () => {
    scene2Music.pause(); 
    scene2.classList.remove('active');
    scene2.style.display = 'none'; 
    scene3.classList.add('active');
    scene3.style.display = 'flex';
});

// التالت للرابع
nextToScene4Btn.addEventListener('click', () => {
    scene3.classList.remove('active');
    scene3.style.display = 'none'; 
    scene4.classList.add('active');
    scene4.style.display = 'flex';
    
    // تشغيل كتابة Readyyyyy
    startTypingReady();
});

// الرابع للخامس (المسجات)
nextToScene5Btn.addEventListener('click', () => {
    scene4.classList.remove('active');
    scene4.style.display = 'none'; 
    scene5.classList.add('active');
    scene5.style.display = 'flex';
});

// دالة كتابة كلمة Ready والزراير
function startTypingReady() {
    const finalTeaser = document.getElementById('final-teaser');
    const readyWord = document.getElementById('ready-word');
    const teaserButtons = document.getElementById('teaser-buttons');
    
    finalTeaser.classList.remove('hidden');
    const textToType = "Readyyyyyyyy?";
    let i = 0;
    readyWord.innerHTML = "";
    
    function typeWriter() {
        if (i < textToType.length) {
            readyWord.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        } else {
            // الزراير تظهر مع آخر حرف
            teaserButtons.classList.remove('hidden');
        }
    }
    setTimeout(typeWriter, 1000);
}

// الإيموجي اللي بتطير في كل الصفحات
function createFloatingItem() {
    const container = document.getElementById('global-floating-elements');
    if(!container) return; 
    
    const item = document.createElement('div');
    const emojis = [
        'https://em-content.zobj.net/source/apple/354/ribbon_1f380.png',
        'https://em-content.zobj.net/source/apple/354/sparkles_2728.png',
        'https://em-content.zobj.net/source/apple/354/cherry-blossom_1f338.png',
        'https://em-content.zobj.net/source/apple/354/red-heart_2764-fe0f.png'
    ];
    
    const img = document.createElement('img');
    img.src = emojis[Math.floor(Math.random() * emojis.length)];
    
    img.style.position = 'absolute';
    img.style.top = '-50px';
    img.style.left = Math.random() * 100 + 'vw'; 
    img.style.width = (Math.random() * 20 + 20) + 'px';
    const duration = Math.random() * 4 + 3; 
    
    img.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 0.8 },
        { transform: `translateY(120vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
        duration: duration * 1000,
        iterations: 1,
        easing: 'linear'
    });
    
    container.appendChild(img);
    setTimeout(() => { img.remove(); }, duration * 1000);
}
setInterval(createFloatingItem, 400);
// --- تحويل الإيموجي لصور آيفون بحجم مناسب ---
document.addEventListener("DOMContentLoaded", function() {
    const appleEmojis = {
        '❤️': 'https://em-content.zobj.net/source/apple/354/red-heart_2764-fe0f.png',
        '🥹': 'https://em-content.zobj.net/source/apple/354/face-holding-back-tears_1f979.png',
        '🌏': 'https://em-content.zobj.net/source/apple/354/globe-showing-asia-australia_1f30f.png',
        '😂': 'https://em-content.zobj.net/source/apple/354/face-with-tears-of-joy_1f602.png',
        '🤪': 'https://em-content.zobj.net/source/apple/354/zany-face_1f92a.png',
        '😍': 'https://em-content.zobj.net/source/apple/354/smiling-face-with-heart-eyes_1f60d.png',
        '👭🏻': 'https://em-content.zobj.net/source/apple/354/two-women-holding-hands-light-skin-tone_1f46d-1f3fb.png',
        '❣️': 'https://em-content.zobj.net/source/apple/354/heart-exclamation_2763-fe0f.png',
        '🥳': 'https://em-content.zobj.net/source/apple/354/partying-face_1f973.png',
        '🫶🏻': 'https://em-content.zobj.net/source/apple/354/heart-hands-light-skin-tone_1faf6-1f3fb.png',
        '🎀': 'https://em-content.zobj.net/source/apple/354/ribbon_1f380.png'
    };

    // دالة بتدور على الإيموجي وبتستبدلها بصورة
    function replaceEmojis(element) {
        if (element.childNodes.length === 0) return;
        
        element.childNodes.forEach(node => {
            if (node.nodeType === 3) { // لو ده نص
                let text = node.nodeValue;
                for (const [emoji, imgUrl] of Object.entries(appleEmojis)) {
                    if (text.includes(emoji)) {
                        // هنا السر: عملنا الصورة ليها كلاس معين بيخليها بحجم الخط
                        const imgHTML = `<img src="${imgUrl}" class="inline-apple-emoji" alt="${emoji}">`;
                        text = text.split(emoji).join(imgHTML);
                    }
                }
                const span = document.createElement('span');
                span.innerHTML = text;
                node.parentNode.replaceChild(span, node);
            }
        });
    }

    // بنطبق الدالة على النصوص بس
    document.querySelectorAll('.ar-quote, .story-line, .long-message').forEach(element => {
        replaceEmojis(element);
    });
});