b = document.getElementById('back');
n = document.getElementById('next');
b.onclick = function() {
    const IDisplay = window.getComputedStyle(img1).display;
    const IIDisplay = window.getComputedStyle(img2).display;
    const IIIDisplay = window.getComputedStyle(img3).display;

    if (IDisplay === 'inline-block') {
        I.style.display = 'none';
        III.style.display = 'inline-block';
    } else if (IIDisplay === 'inline-block') {
        II.style.display = 'none';
        I.style.display = 'inline-block';
    } else if (IIIDisplay === 'inline-block') {
        III.style.display = 'none';
        II.style.display = 'inline-block';
    }
};

b = document.getElementById('back');
n = document.getElementById('next');
n.onclick = function() {
    const IDisplay = window.getComputedStyle(img1).display;
    const IIDisplay = window.getComputedStyle(img2).display;
    const IIIDisplay = window.getComputedStyle(img3).display;

    if (IDisplay === 'inline-block') {
        I.style.display = 'none';
        II.style.display = 'inline-block';
    } else if (IIDisplay === 'inline-block') {
        II.style.display = 'none';
        III.style.display = 'inline-block';
    } else if (IIIDisplay === 'inline-block') {
        III.style.display = 'none';
        I.style.display = 'inline-block';
    }
};
