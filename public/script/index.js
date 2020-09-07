//navbar
const toggler = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar-collapse");
toggler.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

//ajax delete request
if (document.getElementById("delete")) {
  let deletebtn = document.querySelectorAll("#delete");
  deletebtn.forEach((del) => {
    del.addEventListener("click", (e) => {
      // console.log(e.target.dataset.id);
      let route = `/honestlist/${e.target.dataset.id}`;
      fetch(route, {
        method: "delete",
      })
        .then((result) => {
          if (result.ok) {
            const targetParent = e.target.parentNode.parentNode;
            targetParent.style.display = "none";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
}
