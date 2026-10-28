export type Cancha = {
  id: string;
  nombre: string;
  direccion: string;
  precio: number;
};

// TODO: replace with real data from the API
export const canchas: Cancha[] = [
  { id: "1", nombre: "Cancha El Golazo", direccion: "Calle 10 #5-20", precio: 60000 },
  { id: "2", nombre: "Cancha La Esquina", direccion: "Carrera 7 #45-12", precio: 80000 },
  { id: "3", nombre: "Cancha Los Pinos", direccion: "Avenida 3 #18-40", precio: 70000 },
];
