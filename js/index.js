//javascript for index.html

// SLECTORS

const container = document.getElementById("blogs");
// search form selector
const searchTerm = document.querySelector(".search");

// FUNCTIONS
const renderPosts = async (term) => {
  // json server watch link for posts
  // let uri = "http://localhost:3000/posts";
  // to add descending or ascending paths to be sorted for likes or any field we specify
  let uri = "http://localhost:3000/posts?_sort=likes&_order=desc";

  // check if search has a value, if so, use json query key 'q' to search for the post with the term searched
  if (term) {
    uri += `&q=${term}`;
  }

  const res = await fetch(uri);
  const posts = await res.json();

  let template = "";
  posts.forEach((post) => {
    template += `
  <div class="posts">
  <h2>${post.title}</h2>
  <p><small>${post.likes} likes</small></p>
  <p>${post.body.slice(0, 200)}</p>
  <a href="./pages/details.html?id=${post.id}" class="read">Read more..</a>
</div>

  `;
  });

  container.innerHTML = template;
};

// search form hander
const searchHandler = (e) => {
  e.preventDefault();
  let searchVal = searchTerm.term.value.trim();
  renderPosts(searchVal);
};

// LISTENERS

// search form
// automatically searches as you type, event handler 'input'
searchTerm.addEventListener("input", searchHandler);

// submit by pressing enter,  event handler 'submit'
// searchTerm.addEventListener("input", searchHandler);

// do not want to take in the event object as I'm getting the uri data
window.addEventListener("DOMContentLoaded", () => renderPosts());
