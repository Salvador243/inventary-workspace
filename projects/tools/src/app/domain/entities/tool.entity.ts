export interface Tool {
	id: string;
	code: string;
	nombre: string;
	categoria: string;
	contador_activos: number;
	contador_fuera_de_servicio: number;
	imagen: string;
	taller: string;
	estatus: boolean;
}