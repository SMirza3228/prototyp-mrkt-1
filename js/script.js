const targetBlock = document.querySelector('.main__inner');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        };
    });
});

observer.observe(targetBlock);

const targetServicesBlock = document.querySelector('.services');

const observe = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else{
            entry.target.classList.remove('visible');
        };
    });
});

observer.observe(targetServicesBlock);

const targetAboutBlock = document.querySelector('.about__inner');

const observers = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        };
    });
});

observers.observe(targetAboutBlock);

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
};

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
};