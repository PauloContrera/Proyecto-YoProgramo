export class Proyectos {
  id ? : number;
  nombre: string;
  texto: string;
  img: string;
  lenguajes: string;
  url: string;
  github: string;
  video: string;


  constructor(nombre: string, texto: string, img: string, lenguajes: string, url: string, github: string, video: string) {

    this.nombre = nombre;
    this.texto = texto;
    this.img = img;
    this.lenguajes = lenguajes;
    this.url = url;
    this.github = github;
    this.video = video;

  }

}
