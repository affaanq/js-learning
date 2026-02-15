/**
 * Configuration Constants
 * These define the base URLs for API endpoints and forum routing.
 */
const forumLatest = 'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

/**
 * Category Lookup Map
 * Maps numeric category IDs from the API to human-readable names and CSS classes.
 */
const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};

/**
 * Calculates human-readable time difference.
 * Converts a raw timestamp into minutes, hours, or days ago.
 */
const timeAgo = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();
  // Difference in milliseconds converted to seconds
  const seconds = Math.floor((now - date) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Conditional logic for granular time units
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
};

/**
 * Formats view counts for better readability.
 * If views >= 1000, it converts them to 'k' format (e.g., 1.5k).
 */
function viewCount(numView) {
  if (numView >= 1000) {
    return `${Math.floor(numView / 1000)}k`;
  }
  return numView;
}

/**
 * Generates an anchor tag for post categories.
 * Uses a logical OR fallback to handle IDs not found in our local map.
 */
const forumCategory = (id) => {
  // Direct object lookup is O(1) efficiency compared to searching an array.
  const { category, className } = allCategories[id] || { category: 'General', className: 'general' };
  
  return `<a href="${forumCategoryUrl}${className}/${id}" class="category ${className}">${category}</a>`;
};

/**
 * Resolves avatar image sources for posters.
 * Handles the logic for replacing {size} templates and merging relative/absolute URLs.
 */
const avatars = (posters, users) => {
  return posters.map((poster) => {
    // Cross-referencing the poster ID with the full user object array
    const user = users.find((user) => user.id === poster.user_id);

    if (user) {
      // API provides template strings like '/path/{size}/file.png'
      const avatarPath = user.avatar_template.replace('{size}', '30');

      // Ternary logic: If path is relative (starts with /), prepend the base CDN URL.
      const src = avatarPath.startsWith('/') ? `${avatarUrl}${avatarPath}` : avatarPath;

      return `<img src="${src}" alt="${user.name}" />`;
    }
  }).join(''); // join('') removes the commas that exist between array elements
};

/**
 * Renders the forum data into the DOM.
 * Iterates through the topics array and constructs a table row for each entry.
 */
const showLatestPosts = (data) => {
  const { topic_list, users } = data; // Destructuring the main API response
  const { topics } = topic_list;

  const postsContainer = document.getElementById('posts-container');
  
  // Transforming the array of topic objects into a single string of HTML table rows
  postsContainer.innerHTML = topics.map((item) => {
    const { id, title, views, posts_count, slug, posters, category_id, bumped_at } = item;

    return `
      <tr>
        <td>
          <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
          ${forumCategory(category_id)}
        </td>
        <td>
          <div class="avatar-container">
            ${avatars(posters, users)}
          </div>
        </td>
        <td>${posts_count - 1}</td> <td>${viewCount(views)}</td>
        <td>${timeAgo(bumped_at)}</td>
      </tr>
    `;
  }).join('');
};

/**
 * API Data Fetching
 * Asynchronous function using try/catch for robust error handling.
 */
const fetchData = async () => {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    showLatestPosts(data);
  } catch (err) {
    // Specifically required by user story to use console.log
    console.log(err);
  }
};

// Initiate the data flow
fetchData();