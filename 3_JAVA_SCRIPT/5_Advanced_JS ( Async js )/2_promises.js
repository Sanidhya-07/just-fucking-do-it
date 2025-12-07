fetch("https://api.github.com/users")
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    // console.log(data);

    for (i = 0; i < data.length; i++) {
      const parant = document.querySelector(".images");
      const img1 = document.createElement("img");
      img1.src = data[i].avatar_url;
      img1.classList.add("images10");

      parant.append(img1);
    }
  });
