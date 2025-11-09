
(function createSnowflakes() {
    const container = document.getElementById('snow');
    const flakesCount = 70; 
    const flakeChars = ['❆','❅','✻','✼','✦','✧','✺']; 
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    
    for (let i = 0; i < flakesCount; i++) {
        const flake = document.createElement('div');
        flake.className = 'flake';
        flake.innerText = flakeChars[Math.floor(Math.random()*flakeChars.length)];
        const left = Math.random() * 100; 
        flake.style.left = left + 'vw';
        const size = 8 + Math.random() * 24;
        flake.style.fontSize = size + 'px';
        const fallDuration = 8 + Math.random() * 12; 
        const swayDuration = 2 + Math.random() * 3; 
        const delay = -(Math.random() * fallDuration); 
        flake.style.animationDuration = `${fallDuration}s, ${swayDuration}s, ${fallDuration + 0.7}s`;
        flake.style.animationDelay = `${delay}s, ${Math.random()*2}s, ${delay/1.5}s`;
        flake.style.opacity = (0.6 + Math.random()*0.4).toFixed(2);
        container.appendChild(flake);
    }
    
    const stars = 20;
    for (let s = 0; s < stars; s++) {
        const st = document.createElement('div');
        st.className = 'star';
        st.style.left = (Math.random()*100) + 'vw';
        st.style.top  = (Math.random()*80) + 'vh';
        st.style.animationDelay = (Math.random()*3) + 's';
        st.style.opacity = (0.1 + Math.random()*0.9).toFixed(2);
        document.body.appendChild(st);
    }
})();
(function initCountdown() {
    const targetDate = new Date('December 25, 2025 00:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            document.getElementById('countdown').innerHTML = '<div class="countdown-item" style="grid-column: 1/-1;"><span class="countdown-value">🎄 It\'s Christmas! 🎄</span></div>';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
})();
(function initMusicPlayer() {
    const musicBtn = document.getElementById('musicToggle');
    let audio = null;
    let isPlaying = false;
    const musicUrl = 'https://raw.githubusercontent.com/ryukgod26/christmas_ysws/main/christmas-holiday-festive-cheer-snow-427231.mp3';
    musicBtn.addEventListener('click', function() {
        if (!audio) {
            audio = new Audio(musicUrl);
            audio.loop = true;
            audio.volume = 0.3;
        }
        
        if (isPlaying) {
            audio.pause();
            musicBtn.classList.remove('playing');
            isPlaying = false;
        } else {
            audio.play().catch(e => {
                console.log('Audio play failed:', e);
                alert('🎵 Click again to play music!');
            });
            musicBtn.classList.add('playing');
            isPlaying = true;
        }
    });
})();
(function initSantaBag() {
    const santaBag = document.getElementById('santaBag');
    const santaPopup = document.getElementById('santaPopup');
    const popupClose = document.getElementById('popupClose');
    
    santaBag.addEventListener('click', function() {
        santaPopup.classList.add('active');
    });
    
    popupClose.addEventListener('click', function() {
        santaPopup.classList.remove('active');
    });

    santaPopup.addEventListener('click', function(e) {
        if (e.target === santaPopup) {
            santaPopup.classList.remove('active');
        }
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && santaPopup.classList.contains('active')) {
            santaPopup.classList.remove('active');
        }
    });
})();
(function initRoadmapAnimation() {
    const milestones = document.querySelectorAll('.milestone');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    milestones.forEach(milestone => {
        observer.observe(milestone);
    });
})();
