export class Notebook {
    id: number;
    nombre: string;
    propietarioId: string;

    constructor(id: number, nombre: string, propietarioId: string) {
        this.id = id;
        this.nombre = nombre;
        this.propietarioId = propietarioId;
    }
}