export interface OfertasReqResponsive {
  id:             number;
  nombre:         string;
  experiencia:    string;
  rango_salarial: string;
  ubicacion:      Ubicacion;
  modalidades:    any[];
  aspirantes:     any[];
}

export interface Ubicacion {
  id:       number;
  nombre:   string;
  latitud:  string;
  longitud: string;
}
