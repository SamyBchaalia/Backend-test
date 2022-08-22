 let countries = require("./data");

 const filter = process.argv.find(arg => arg.includes('--filter='))
 const count = process.argv.find(arg => arg.includes('--count'))

 if (filter) {
    // goal 1 : 
    const query = filter.split('=')[1]
    countries.forEach(( country ) => {
      country.people.forEach( people  => {
         people.animals = people.animals.filter( animal => animal.name.includes(query))
      })
    })
 }



 if (count) {
    // goal 2 :
    countries.forEach(( country ) => {
      country.name = `${country.name} [${country.people.length}]`
      country.people.forEach( people  => {
         people.name = `${people.name} [${people.animals.length}]`
      })
    })
 }

 console.log(JSON.stringify(countries));