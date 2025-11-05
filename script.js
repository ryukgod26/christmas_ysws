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
    for (let s=0; s<stars; s++){
    const st = document.createElement('div');
    st.className = 'star';
    st.style.left = (Math.random()*100) + 'vw';
    st.style.top  = (Math.random()*80) + 'vh';
    st.style.animationDelay = (Math.random()*3) + 's';
    st.style.opacity = (0.1 + Math.random()*0.9).toFixed(2);
    document.body.appendChild(st);
    }
})();