fetch("https://api.github.com/users")
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    const parant = document.querySelector(".images");

    data.forEach((element) => {
      const img1 = document.createElement("img");
      img1.src = element.avatar_url;
      img1.classList.add("images10");

      parant.append(img1);
    });
  })
  .catch((error) => {
    console.log("Error : ", error);
  });
