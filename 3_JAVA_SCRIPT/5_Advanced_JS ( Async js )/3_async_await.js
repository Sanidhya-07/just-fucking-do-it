// function abcd() {
//   const raw = fetch("https://randomuser.me/api")
//     .then((rawdata) => {
//       return rawdata.json();
//     })
//     .then((actualdata) => {
//       console.log(actualdata);
//     });
// }

// abcd();

// async await

async function abcd() {
  const raw = await fetch("https://randomuser.me/api");
  const actualData = await raw.json();

  console.log(actualData);
}

abcd();
