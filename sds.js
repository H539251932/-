let tree = document.querySelector(".tree");
for (let i = 0; i < 129; i++) {
  let li = document.createElement("li");
  li.style = `--i:${i}`;
  tree.appendChild(li);
}
