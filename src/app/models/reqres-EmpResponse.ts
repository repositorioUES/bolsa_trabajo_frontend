export interface EmpresasReqResponsive {
  [x: string]: any;
  id:       number;
  nombre:   string;
  telefono: string;
  email:    string;
  //ofertas:  any[];
  usuario:  Usuario;
}

 interface Usuario {
  idUsuario:             number;
  username:              string;
  password:              string;
  emailUsuario:          string;
  enabled:               boolean;
  authorities:           Authority[];
  accountNonExpired:     boolean;
  credentialsNonExpired: boolean;
  accountNonLocked:      boolean;
}

export interface Authority {
  authority: string;
}
