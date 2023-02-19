//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

//DOM Elements:

document.querySelector('button').addEventListener('click', getFetch)
// let search = document.querySelector('input')
// let h2 = document.querySelector('h2')
// let img = document.querySelector('img')
// let h3 = document.querySelector('h3')


function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
          console.log(data)
          const potentialPet = new Pokemon(data.name, data.height, data.weight, data.types, data.sprites.other['official-artwork'].front_default )
      })

      .catch(err => {
          console.log(`error ${err}`)
      });
}

//can I change this into a factory function?

class Pokemon {
  constructor (name, height, weight, types, image) {
    this.name = name,
    this.height = height,
    this.weight = weight,
    this.types = types,
    this.image = image,
    this.housepet = true,
    this.reason = []
  }

  //data.types[0].type.name?

}