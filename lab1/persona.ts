import { GeneroPersona, TiposSanguineos } from "./support";

class Persona {
  // atributos
  private idPersona: number;
  private nombreCompleto: string;
  /** Un número entero no negativo */
  private edad: number;
  private tipoSanguineo: TiposSanguineos;
  private sexo: GeneroPersona;

  /** @constructor */
  public constructor() {
    this.nombreCompleto = "Desconocido";
    this.edad = 0;
    this.tipoSanguineo = TiposSanguineos.Desconocido;
  }

  // getter/setter
  public getNombreCompleto(): string {
    return this.nombreCompleto;
  }

  public setNombreCompleto(nombreCompleto: string): void {
    this.nombreCompleto = nombreCompleto;
  }

  public getEdad(): number {
    return this.edad;
  }

  /**
   * @param  {number} edad - Un número entero no negativo
   * @returns void
   * @throws {TypeError} Si el número no es entero o es negativo
   */
  public setEdad(edad: number): void {
    if (!Number.isInteger(edad)) {
      throw new TypeError('El número debe ser entero');
    }

    if (edad < 0) {
      throw new TypeError('El número debe ser no negativo');
    }
    
    this.edad = edad;
  }
}
