const lectures = [
    {
        id: "1",
        title: "Travel Scape",
        link: "/projects/TravelScape",
    },
    {
        id: "2",
        title: "Style Shop",
        link: "/projects/StyleShop",
    },
    {
        id: "3",
        title: "Next",
        link: "/projects/Next",
    },
    {
        id: "4",
        title: "Eco",
        link: "/projects/Eco",
    },
    {
        id: "5",
        title: "Zen",
        link: "/projects/Zen",
    },
];

// DOM Elements
const lecturesTableBody = document.getElementById('lectures-table-body');

// Initialize the portal
function initPortal() {
    renderLecturesTable(lectures);
}

// Render the lectures table
function renderLecturesTable(lecturesToRender) {
    lecturesTableBody.innerHTML = '';
    
    lecturesToRender.forEach(lecture => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>
                <div class="lecture-title">${lecture.title}</div>
            </td>
            <td>
                <a href=${lecture.link+"/index.html"} target="_blank">View</a>
            </td>
        `;
        
        lecturesTableBody.appendChild(row);
    });
}

// Initialize the portal when the DOM is loaded
document.addEventListener('DOMContentLoaded', initPortal);
