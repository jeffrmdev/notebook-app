export class Notes {
    id: number;
    titulo: string;
    contenido: string;
    autorId: string;
    libroId: number;
    creadoEl: Date;

    constructor(id: number, titulo: string, contenido: string, autorId: string, libroId: number, creadoEl: Date) {
        this.id = id;
        this.titulo = titulo;
        this.autorId = autorId;
        this.libroId = libroId;
        this.contenido = contenido;
        this.creadoEl = creadoEl;
    }
}