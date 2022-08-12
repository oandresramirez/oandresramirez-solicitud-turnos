import { Headquarters } from "../types-sedes/SedeType";

export interface DatosPersonalesType {
    tipoDocumento: string;
    documento: string;
    primNombre: string;
    segNombre: string;
    primApellido: string;
    segApellido: string;
    sedes: Headquarters;
}