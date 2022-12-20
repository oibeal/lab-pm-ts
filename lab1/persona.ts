// @ts-ignore
import { EdadConduccion, EDAD_MINIMA_CONDUCION } from "./support.ts";

class Persona {
  // atributos
  private idPersona: number;
  private nombreCompleto: string;
  /** Un número entero no negativo */
  private edad: number;
  private tipoSanguineo: string;
  private sexo: string;
  private nacionalidad: string;

  /** @constructor */
  public constructor(
    idPersona?: number,
    nombreCompleto?: string,
    edad?: number,
    tipoSanguineo?: string,
    sexo?: string,
    nacionalidad?: string
  ) {
    if (idPersona === undefined
      && nombreCompleto === undefined
      && edad === undefined
      && tipoSanguineo === undefined
      && sexo === undefined
      && nacionalidad === undefined) {
        // Si no hay ningún parametro definido
        this.defaultInit();
        return;
      }
      
      if (idPersona !== undefined
        && nombreCompleto !== undefined
        && edad !== undefined
        && tipoSanguineo !== undefined
        && sexo !== undefined
        && nacionalidad !== undefined) {
          // Si todos los parametros están definidos
          this.init(idPersona, nombreCompleto, edad, tipoSanguineo, sexo, nacionalidad);
          return;
        }

        throw Error('método de creación no valido');
  } // end constructor

  private defaultInit(): void {
    this.nombreCompleto = "Desconocido";
    this.edad = 0;
    this.tipoSanguineo = '0';
  }

  private init(
    idPersona: number,
    nombreCompleto: string,
    edad: number,
    tipoSanguineo: string,
    sexo: string,
    nacionalidad: string
  ): void {
    this.idPersona = idPersona;
    this.setNombreCompleto(nombreCompleto);
    this.setEdad(edad);
    this.tipoSanguineo = tipoSanguineo;
    this.sexo = sexo;
    this.nacionalidad = nacionalidad;
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

  // métodos
  public tieneMismoId(persona: Persona): boolean {
    return this.idPersona === persona.idPersona;
  }

  public puedeConducir(): boolean {
    // si el país no está en la lista su edad mínima es 18
    const edadMinima = EdadConduccion[this.nacionalidad] ?? EDAD_MINIMA_CONDUCION;
    return this.edad >= edadMinima;
  }
}