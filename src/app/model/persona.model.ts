
export class persona{
    id!: number;
    img: string;
    nombre: string;
    texto: string;
    texto2: string;

    constructor(img: string, nombre: string, texto: string, texto2: string){
        this.img=img;
        this.nombre=nombre;
        this.texto=texto;
        this.texto2=texto2;
    }
}


