
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = "https://shibe.online/api/shibes?count=[1-100]"

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector("img").src= data[0]
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}