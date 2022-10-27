export class Cursos {
    id? : number;
    nombre: string; 
    lugar: string;
    desde: string; 
    hasta: string;
    texto: string; 
    img: string; 

    constructor(nombre: string, lugar: string, desde: string, hasta: string, texto: string, img: string){

        this.nombre = nombre;
        this.lugar= lugar;
        this.desde = desde;
        this.hasta = hasta;
        this.texto = texto;
        this.img = img;
    }
}
