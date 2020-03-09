const text = document.getElementById("text");
const submitBtn = document.getElementById("js--submit");
const list = document.getElementById("js--list");
const listItems = document.getElementsByClassName("js--list-item");

const handleSubmit = () => {
  if(text.value === '') {
    alert('Input text')
    return;
  }
  const li = document.createElement("li");
  li.classList.add("list__item", "js--list-item");

  const button = document.createElement("button");
  button.classList.add("list__item--close", "js--close");
  button.appendChild(document.createTextNode("×"));
  button.setAttribute("type", "button");

  const p = document.createElement("p");
  p.classList.add("list__item--text");
  p.appendChild(document.createTextNode(text.value));

  li.appendChild(button);
  li.appendChild(p);

  // list add
  list.appendChild(li);

  // list remove
  const handleClose = () => {
    li.remove();
  };
  button.onclick = handleClose;
};
submitBtn.onclick = handleSubmit;