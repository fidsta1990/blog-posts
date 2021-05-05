// SLECTORS
//fetches id on queried search for individual post
let searchParam = window.location.search;
//allows use to generate an endpoint to fetch the id with all the data
const id = new URLSearchParams(searchParam).get("id");
const container = document.getElementById("details");
// delete btn to delete post
const deleteBtn = document.getElementById("delete");

// FUNCTIONS
const renderPosts = async () => {
  let uri = `http://localhost:3000/posts/${id}`;
  const res = await fetch(uri);
  const post = await res.json();

  const template = `
<h2>${post.title}</h2>
<p>${post.likes} likes</p>
<p>${post.body}</p>

`;

  container.innerHTML = template;
};
// LISTENERS
// do not want to take in the event object as I'm getting the uri data
window.addEventListener("DOMContentLoaded", () => renderPosts());
deleteBtn.addEventListener("click", async (e) => {
  let uri = `http://localhost:3000/posts/${id}`;
  const res = await fetch(uri, {
    method: "DELETE",
  });

  window.location.replace("/index.html");
});
