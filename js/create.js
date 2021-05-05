// SELECTORS
const form = document.querySelector("form");
// FUNCTIONS
const createPost = async (e) => {
  e.preventDefault();
  let uri = "http://localhost:3000/posts";

  //no id added as json server provides a new id for the blog post
  const doc = {
    title: form.title.value,
    body: form.body.value,
    likes: 0,
  };

  //post method to send post to uri specified
  await fetch(uri, {
    method: "POST",
    body: JSON.stringify(doc),
    headers: { "Content-Type": "application/json" },
  });

  //once post is created, the window will redirect you to the home page at index.html
  window.location.replace("/index.html");
};

// LISTENERS
form.addEventListener("submit", createPost);
