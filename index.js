const hamburgerBtn = document.querySelector('.hamburger-btn');
const sidebarContainer = document.querySelector('.sidebar-container');
const subscriptionContainer = document.querySelector('.subscription-container');
const exploreContainer = document.querySelector('.explore-container');
const navList = document.querySelector('.nav-list');
const smallSideList = document.querySelector('.sidelist-container');
const videoContainer = document.querySelector('.video-container');
// console.log(videoContainer)

const body = document.body;

// Function to toggle the sidebar visibility and background
function toggleSidebar() {
    const isOpen = sidebarContainer.classList.toggle('sidebar-visible');
    
    if (isOpen) 
    {
        
        sidebarContainer.style.zIndex = '4';
        sidebarContainer.style.width = '20%'; 
        sidebarContainer.style.backgroundColor = 'white'; 
        // videoContainer.style.opacity = '1';
        sidebarContainer.style.width = "25%";
        videoContainer.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    } 
    else {
        // Restore default values
        smallSideList.classList.toggle('sidebar-visible');
        sidebarContainer.style.overflow = "hidden";
        // sidebarContainer.style.height = '100vh';
        sidebarContainer.style.zIndex = 'initial';
        body.style.backgroundColor = 'initial';
        sidebarContainer.style.width = 'initial';
    }
    
    // Toggle visibility for other sidebar elements
    subscriptionContainer.classList.toggle('sidebar-visible');
    exploreContainer.classList.toggle('sidebar-visible');
    navList.classList.toggle('sidebar-visible');
}


// Add a click event listener to the hamburgerBtn
hamburgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    smallSideList.style.display = 'none'; 
    toggleSidebar();
});

const videos = document.querySelectorAll(".video-container-videos");

let url = 'http://localhost:5500/video_section.html'

// on click video 

videos.forEach((video)=>{
    video.addEventListener("click",(e)=>{
        e.preventDefault();
        location.href = url;
    
    })
    
})







