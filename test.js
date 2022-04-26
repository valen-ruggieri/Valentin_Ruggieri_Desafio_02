const Container = require("./index")



const newContainer = new Container('productos.txt');
newContainer.save({
    title: "Escuadra",
    price: 123.45,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
  });
  
  newContainer.save({
    title: "Calculadora",
    price: 234.56,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"
  });
  
  newContainer.save({
    title: "Globo Terráqueo",
    price: 345.67,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png"
  });
  
//  newContainer.getById(0);
//  newContainer.getById(1);
//  newContainer.getById(2);

 newContainer.getAll();

 //newContainer.deleteById(1);

//console:

// {title: 'Escuadra', price: 123.45, thumbnail: 'https://cdn3.iconfinder.com/data/icons/educ…64/ruler-triangle-stationary-school-256.png', id: 0}
// {title: 'Calculadora', price: 234.56, thumbnail: 'https://cdn3.iconfinder.com/data/icons/educ…-209/64/calculator-math-tool-school-256.png', id: 1}
// {title: 'Globo Terráqueo', price: 345.67, thumbnail: 'https://cdn3.iconfinder.com/data/icons/educ…/globe-earth-geograhy-planet-school-256.png', id: 2}
// (3) [{…}, {…}, {…}]

//mapeado:

// [' objet: Escuadra  $123.45  img: https://cdn3.icon…209/64/ruler-triangle-stationary-school-256.png ',
//  ' objet: Calculadora  $234.56  img: https://cdn3.i…tion-209/64/calculator-math-tool-school-256.png ',
//   ' objet: Globo Terráqueo  $345.67  img: https://cd…9/64/globe-earth-geograhy-planet-school-256.png ']

