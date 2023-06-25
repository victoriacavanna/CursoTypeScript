interface HistorialClinico {
    operaciones: string[];
    enfermedades: string[];
}

interface Vacunas{
    rabia: boolean;
    moquilloCanino: boolean;
    parvo: boolean;
}

interface IPerro {
    readonly nombre: string;
    raza: string;
    edad: number;
    peso: number;
    color: string;
    comidasFavoritas: string[];
    gustaJugar: boolean;
    vacunas?: Vacunas;
    historialClinico?: HistorialClinico;
    madre?: IPerro;
    padre?: IPerro;

    crecer: () => void;
    agregarOperacion: (operacion: string) => void;
    agregarEnfermedad: (enfermedad: string) => void;
    agregarInformacionPadre: (padre: IPerro) => void;
    agregarInformacionMadre: (madre: IPerro) => void;
    agregarVacunas: (vacunas: Vacunas) => void;
}