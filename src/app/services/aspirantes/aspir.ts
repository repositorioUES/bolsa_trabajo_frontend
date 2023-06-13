import { Genero } from "./genero";
import { Usuario } from "./usuario";
/* class Usuario {
  constructor(public id: number){}
} */

/* export interface Usuario {
  id: number;
} */

export class Aspir {

  email!: string;
  fecha_nacimiento!: Date;
  nit!: number;
  numero_documento_identidad!: number;
  nup!: number;
  primer_apellido!: string;
  primer_nombre!: string;
  redes_sociales!: string;
  segundo_apellido!: string;
  segundo_nombre!: string;
  telefono_casa!: number;
  telefono_personal!: number;
  tipo_documento!: string;
  genero!: Genero;
  usuario!:  Usuario;

}




