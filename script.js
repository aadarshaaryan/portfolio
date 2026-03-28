let sidebar = document.getElementById('sidebar');
let sidebarBtn = document.getElementById('sidebarBtn');
const typeA = document.querySelectorAll('.t0a');
const typeB = document.querySelectorAll('.t0b');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const toggleAnimations = (show) => {
    typeA.forEach(item => {
        show ? item.classList.add('sidebar-animation-right') : item.classList.remove('sidebar-animation-right');
    });
    typeB.forEach(item => {
        show ? item.classList.add('sidebar-animation-left') : item.classList.remove('sidebar-animation-left');
    });
};

sidebar.style.display = 'none';
sidebarBtn.addEventListener('click', () => {
    const opening = sidebar.style.display === 'none';
    
    sidebar.style.display = opening ? 'block' : 'none';
    toggleAnimations(opening);
});

document.addEventListener('click', (event) => {
    const isVisible = sidebar.style.display === 'block';
    const clickedOutside = !sidebar.contains(event.target) && !sidebarBtn.contains(event.target);

    if (isVisible && clickedOutside) {
        sidebar.style.display = 'none';
        toggleAnimations(false);
    }
});

const getFileName = (path) => {
    return path.split('/').pop() || 'index.html';
};

const currentFile = getFileName(window.location.pathname);

// NAVBAR
document.querySelectorAll('.navbar a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    const linkFile = getFileName(href);

    if (linkFile === currentFile) {
        link.classList.add('active');
    }
});

// SIDEBAR
document.querySelectorAll('#sidebar a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    const linkFile = getFileName(href);

    if (linkFile === currentFile) {
        link.classList.add('active-sidebar');
    }
});