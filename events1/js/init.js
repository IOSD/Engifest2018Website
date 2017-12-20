{
    imagesLoaded(document.body, { background: true }, () => document.body.classList.remove('loading'));

    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const galleryItems = Array.from(document.querySelectorAll('.gallery > .gallery__item'));
    const navItems = Array.from(document.querySelectorAll('.gallery-nav > .gallery-nav__item'));
    const piecesObjs = [];
    let current = 0;
    let isAnimating = false;
    let animateInTimeout;
    let fx = 2;

    galleryItems.forEach((item) => {
        piecesObjs.push(new Pieces(item, {
        pieces: {rows: 7, columns: 4},
        delay: [0,200]
    }));
});

    navItems.forEach((navitem, pos) => {
        navitem.addEventListener('click', (ev) => navigate(ev, pos));
});

    const navigate = (ev, pos) => {
    ev.preventDefault();
    if ( isAnimating || current === pos ) {
        return false;
    }
    isAnimating = true;

    navItems[current].classList.remove('gallery-nav__item--current');
    navItems[pos].classList.add('gallery-nav__item--current');

    piecesObjs[current].animate({
        duration: 800,
        easing: [0.2,1,0.3,1],
        delay: (t,i,l) => {
        if ( fx === 0 ) {
        return (l-i-1) + parseInt(t.dataset.delay);
    }
else if ( fx === 1 ) {
        return parseInt(t.dataset.column) + parseInt(t.dataset.delay);
    }
    else {
        return (l-i-1)*20+getRandomInt(-30,30);
    }
},
    translateX: (t,i) => {
        if ( fx === 0 ) {
            return t.dataset.column < piecesObjs[current].getTotalColumns()/2 ? anime.random(50,100)+'px' : anime.random(-100,-50)+'px';
        }
        else if ( fx === 1 ) {
            return pos > current ? anime.random(-1500,-1000)+'px' : anime.random(1000,1500)+'px';
        }
        else {
            return anime.random(-10,10)+'px';
        }
    },
    translateY: (t,i) => {
        if ( fx === 0 ) {
            return anime.random(-1000,-800)+'px';
        }
        else if ( fx === 1 ) {
            return t.dataset.row < piecesObjs[current].getTotalRows()/2 ? anime.random(50,100)+'px' : anime.random(-100,-50)+'px';
        }
        else {
            return anime.random(-1000,-800)+'px';
        }
    },
    opacity: {
        value: 0,
            easing: 'linear'
    },
    complete: () => {
        galleryItems[current].classList.remove('gallery__item--current');
        current = pos;
        isAnimating = false;
    }
});

    piecesObjs[pos].pieces.forEach((piece) => {
        piece.style.opacity = 0;

    if ( fx === 0 ) {
        piece.style.transform = `translateX(${piece.dataset.column > piecesObjs[pos].getTotalColumns()/2 ? anime.random(50,100) : anime.random(-100,-50)}px) translateY(${anime.random(800,1000)}px)`;
    }
    else if ( fx === 1 ) {
        piece.style.transform = `translateX(${pos > current ? anime.random(1000,1500) : anime.random(-1500,-1000)}px) translateY(${piece.dataset.row < piecesObjs[pos].getTotalRows()/2 ? anime.random(50,100) : anime.random(-100,-50)}px)`;
    }
    else {
        piece.style.transform = `translateX(${anime.random(-50,50)}px) translateY(${anime.random(-200,-100)}px)`;
    }
});

    galleryItems[pos].style.opacity = 1;
    piecesObjs[pos].animate({
        duration: 800,
        easing: fx === 2 ? 'easeOutQuint' : 'easeInOutQuint',
        delay: (t,i,l) => {
        if ( fx === 0 ) {
        return i + parseInt(t.dataset.delay);
    }
else if ( fx === 1 ) {
        return parseInt(t.dataset.column) + parseInt(t.dataset.delay);
    }
    else {
        return (l-i-1)*40 + 150;
    }
},
    translateX: 0,
        translateY: 0,
        rotateZ: () => {
        if ( fx === 0 ) {
            return [anime.random(-45,45),0];
        }
        return 0;
    },
    opacity: 1,
        complete: () => {
        galleryItems[pos].classList.add('gallery__item--current');
    }
});
};

    const fxItems = Array.from(document.querySelectorAll('.switch > .switch__item'));
    fxItems.forEach((fxitem, pos) => {
        fxitem.addEventListener('click', (ev) => {
        if (fx === pos) return;
    fxItems[fx].classList.remove('switch__item--current');
    fx = pos;
    fxItems[fx].classList.add('switch__item--current');
});
});
}
