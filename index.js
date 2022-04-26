const fs = require("fs");


class Container {
  constructor(archivo) {
    this.archivo = archivo;
  }

  save(objet) {
    try {
      const contentParsed = this.functionRepeat();
      objet["id"] = contentParsed[contentParsed.length - 1].id + 1;
      fs.writeFileSync(this.archivo, JSON.stringify([...contentParsed, objet]));
    } catch (err) {
      console.log(err);
      const archivoName = this.archivo;
      fs.writeFileSync(archivoName, JSON.stringify([{ ...objet, id: 0 }]));
    }
  }
  getById(id) {
    try {
      const contentParsed = this.functionRepeat();
      return console.log(
        contentParsed.find((produucto) => id === produucto.id)
      );
    } catch (err) {
      console.error(err);
    }
  }

  functionRepeat() {
    const archivoName = this.archivo;
    const content = fs.readFileSync(archivoName);
    const contentParsed = JSON.parse(content);
    return contentParsed;
  }
  getAll() {
    try {
      const contentParsed = this.functionRepeat();
      return console.log(
        contentParsed.map(
          (e) => " objet: "+e.title + "  $" + e.price + "  img: " + e.thumbnail + " ")
      );
    } catch (err) {
      console.log("No se lee el archivo");
      console.log(err);
    }
  }

  deleteById(id) {
    try {
      const contentParsed = this.functionRepeat();
      const filterById = contentParsed.filter((producto) => producto.id !== id);
      fs.writeFileSync(this.archivo, JSON.stringify([filterById]));
      return console.log(filterById);
    } catch (err) {
      console.log("Archivo no encontrado" + err);
    }
  }

  deleteAll() {
    fs.writeFileSync(this.archivo, " ");
    return console.log("Archivo eliminado");
  }
}

module.exports = Container;
