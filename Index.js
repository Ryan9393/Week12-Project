// 1.	Create a full CRUD application of your choice. If you can use an existing API, use AJAX to interact with it.
// However, you do not have to use an API. If you do not use an API, store the entities you will create, read, update, and delete in an array.
// a.	Use a form to add new entities
// b.	Build a way for users to update or delete entities
// c.	Use Bootstrap and CSS to style your project


let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("successs");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

let createPost = () => {
  posts.innerHTML += `
  <div>
    <p>${data.text}</p>
    <span class="options">
      <button type="button" class="btn btn-light" onClick="editPost(this)">Edit</button>
      <button type="button" class="btn btn-danger" onClick="deletePost(this)">Delete</button>
    </span>
  </div>
  `;
  input.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};

