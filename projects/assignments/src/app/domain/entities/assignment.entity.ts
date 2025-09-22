export interface Assignment {
	id: string;
	usuario_asignado: string;
	herramienta: string[];
	fecha_hora_salida: Date;
	fecha_hora_regreso?: Date;
	condicion: 'Excelente' | 'Bueno' | 'Averiado';
}