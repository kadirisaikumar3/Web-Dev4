// Sample data for trending and recommended content
const trendingContent = [
    { title: 'Movie 1', genre: 'Action' },
    { title: 'Movie 2', genre: 'Comedy' },
    { title: 'Movie 3', genre: 'Drama' }
];

const recommendedContent = [
    { title: 'Series 1', genre: 'Thriller' },
    { title: 'Series 2', genre: 'Sci-Fi' },
    { title: 'Series 3', genre: 'Fantasy' }
];

// Function to display trending and recommended content
function displayContent(content, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear existing content

    content.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('content-item');
        div.innerHTML = `<h3>${item.title}</h3><p>Genre: ${item.genre}</p>`;
        container.appendChild(div);
    });
}

// Display trending and recommended content on page load
window.onload = function() {
    displayContent(trendingContent, 'trending-content');
    displayContent(recommendedContent, 'recommended-content');
};
