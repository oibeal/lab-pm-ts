class Persona {
  // atributos
  private nombreCompleto: string;
  /** Un número entero no negativo */
  private edad: number;
  private tipoSanguineo: string;

  /** @constructor */
  public constructor() {
    this.nombreCompleto = "Desconocido";
    this.edad = 0;
    this.tipoSanguineo = "0";
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
   */
  public setEdad(edad: number): void {
    if (!Number.isInteger(edad)) {
      // TODO: throw error
    }

    if (edad < 0) {
      // TODO: throw error
    }
    
    this.edad = edad;
  }
}
