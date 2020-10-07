const frontPage = document.querySelector('.front-section');
const stickyHeader = document.querySelector('header');
const listItems = Array.from(document.querySelectorAll('.list-item'));
const list = document.querySelector('.list');
// const featuresGrid = document.querySelector('.features-grid');
// const featuresArray = document.querySelectorAll('.feature');
const featureToBeChanged = document.querySelector('.media-on-left');
const loadingScreen = document.querySelector('.loading-screen');
const outerModal = document.querySelector('.settings-outer-modal');
// const innerSettingsModal = document.querySelector('.settings-inner-modal');
const darkThemeToggle = document.querySelector('#dark-theme-toggle');
const showSettingsButton = document.querySelector('.settings-icon');
const closeSettingsButton = document.querySelector('.settings-close-btn');
const copyrightYear = document.querySelector('.copyright-year');

// copyrightYear.textContent = new Date().getFullYear();

darkThemeToggle.addEventListener('input', () => {
    if (darkThemeToggle.checked) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    };
});

showSettingsButton.addEventListener('click', () => {
    outerModal.classList.add('show-settings');
});

closeSettingsButton.addEventListener('click', () => {
    outerModal.classList.remove('show-settings');
});

outerModal.addEventListener('click', (event) => {
    if (!event.target.closest('.settings-inner-modal')) {
        outerModal.classList.remove('show-settings');
    };
});

setTimeout(() => {
    loadingScreen.remove();
}, 0);

let intialStickyHeaderHeight = stickyHeader.getBoundingClientRect().height;
frontPage.style.paddingTop = `${intialStickyHeaderHeight + 70}px`;

addEventListener('scroll', () => {
    if (pageYOffset > intialStickyHeaderHeight) {
        stickyHeader.classList.add('small');
    };
    if (pageYOffset < intialStickyHeaderHeight) {
        stickyHeader.classList.remove('small');
    };
    const headerHeight = stickyHeader.getBoundingClientRect().height;
});
list.style.gridTemplateRows = `repeat(${listItems.length}, auto)`;
// featuresGrid.style.gridTemplateColumns = `repeat(${featuresArray.length}, 1fr)`;

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

function correctFeaturesSection(windowWidth) {
    if (windowWidth < 940) {
        featureToBeChanged.innerHTML = `
            <div class="feature-content-block">
                <div class="feature-heading">
                    <div class="feature-icon">
                        <ion-icon name="code-slash-outline"></ion-icon>
                    </div>
                    <div class="feature-heading-text">
                        Search straight through the Extension
                    </div>
                </div>
                <div class="feature-content">
                    Smoothcode allows you to search directly from your editor. This increases user efficiency as he doesn't have to waste time to open browser and googling and searching for it.
                </div>
            </div>
            <div class="feature-media">
                <img src="../Images/background_image_front_page.png" alt="Feature Media" class="feature-media-content">
            </div>
        `
    } else {
        featureToBeChanged.innerHTML = `
            <div class="feature-media">
                <img src="../Images/background_image_front_page.png" alt="Feature Media" class="feature-media-content">
            </div>
            <div class="feature-content-block">
                <div class="feature-heading">
                    <div class="feature-icon">
                        <ion-icon name="code-slash-outline"></ion-icon>
                    </div>
                    <div class="feature-heading-text">
                        Search straight through the Extension
                    </div>
                </div>
                <div class="feature-content">
                    SmoothCode uses a list of popular forums and documentations through which it's very easy to look up your bugs rather than googling and wasting time searching countless resources.
                </div>
            </div>
        `
    };
};

window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth;
    correctFeaturesSection(windowWidth);
    const headerHeight = stickyHeader.getBoundingClientRect().height;
    if (windowWidth < 460) {
        showSettingsButton.classList.add('down');
    } else if (windowWidth > 460) {
        showSettingsButton.classList.remove('down');
    };
});

const initialWindowWidth = window.innerWidth;
if (initialWindowWidth < 940) {
    featureToBeChanged.innerHTML = `
        <div class="feature-content-block">
            <div class="feature-heading">
                <div class="feature-icon">
                    <ion-icon name="code-slash-outline"></ion-icon>
                </div>
                <div class="feature-heading-text">
                    Search straight through the Extension
                </div>
            </div>
            <div class="feature-content">
                Smoothcode allows you to search directly from your editor. This increases user efficiency as he doesn't have to waste time to open browser and googling and searching for it.
            </div>
        </div>
        <div class="feature-media">
            <img src="../Images/background_image_front_page.png" alt="Feature Media" class="feature-media-content">
        </div>
    `
}
if (initialWindowWidth < 460) {
    showSettingsButton.classList.add('down');
}