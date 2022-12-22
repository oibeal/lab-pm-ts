import {
  edadConduccion,
  EDAD_MINIMA_CONDUCION,
  generoPersona,
  tablaDonacion,
  tiposSanguineos,
} from "./support.ts";

class Persona {
  // atributos
  private idPersona!: number;
  /** No puede ser vacio */
  private nombreCompleto!: string;
  /** Un número entero no negativo */
  private edad!: number;
  private tipoSanguineo!: string;
  private sexo!: string;
  private nacionalidad!: string;

  /**
   * @constructor
   * @throws {Error} - Cuando el constructor no esta vácio pero tampoco se han especificado todos los parametros
   */
  public constructor(
    idPersona?: number,
    nombreCompleto?: string,
    edad?: number,
    tipoSanguineo?: string,
    sexo?: string,
    nacionalidad?: string
  ) {
    if (
      idPersona === undefined &&
      nombreCompleto === undefined &&
      edad === undefined &&
      tipoSanguineo === undefined &&
      sexo === undefined &&
      nacionalidad === undefined
    ) {
      // Si no hay ningún parametro definido
      this.defaultInit();
      return;
    }

    if (
      idPersona !== undefined &&
      nombreCompleto !== undefined &&
      edad !== undefined &&
      tipoSanguineo !== undefined &&
      sexo !== undefined &&
      nacionalidad !== undefined
    ) {
      // Si todos los parametros están definidos
      this.init(
        idPersona,
        nombreCompleto,
        edad,
        tipoSanguineo,
        sexo,
        nacionalidad
      );
      return;
    }

    throw Error("método de creación no valido");
  } // end constructor

  private defaultInit(): void {
    this.idPersona = 0;
    this.nombreCompleto = "Desconocido";
    this.edad = 0;
    this.tipoSanguineo = "0";
    this.sexo = "Desconocido";
    this.nacionalidad = "Desconocido";
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
    this.setTipoSanguineo(tipoSanguineo);
    this.setSexo(sexo);
    this.nacionalidad = nacionalidad;
  }

  // getter/setter
  public getNombreCompleto(): string {
    return this.nombreCompleto;
  }

  /**
   * @param  {string} nombreCompleto No puede estar vacio
   * @returns void
   * @throws {Error} El nombre no puede ser una cadena vacia
   */
  public setNombreCompleto(nombreCompleto: string): void {
    if (nombreCompleto.length === 0) {
      throw new Error("El nombre no puede ser una cadena vacia");
    }

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
      throw new TypeError("El número debe ser entero");
    }

    if (edad < 0) {
      throw new TypeError("El número debe ser no negativo");
    }

    this.edad = edad;
  }

  public getTipoSanguineo(): string {
    return this.tipoSanguineo;
  }

  /**
   * @param  {string} tipoSanguineo - Un número entero no negativo
   * @returns void
   * @throws {Error} El tipo de sangre debe ser: A+, A-, B+, B-, AB+, AB-, O+, O-
   */
  public setTipoSanguineo(tipoSanguineo: string): void {
    if (!tiposSanguineos.includes(tipoSanguineo)) {
      throw new Error(
        "El tipo de sangre debe ser: A+, A-, B+, B-, AB+, AB-, O+, O-"
      );
    }
    this.tipoSanguineo = tipoSanguineo;
  }

  public getSexo(): string {
    return this.sexo;
  }

  /**
   * @param  {string} sexo - Un número entero no negativo
   * @returns void
   * @throws {Error} El sexo debe ser H o M
   */
  public setSexo(sexo: string): void {
    if (!generoPersona.includes(sexo)) {
      throw new Error("El sexo debe ser H o M");
    }
    this.sexo = sexo;
  }

  // métodos
  public tieneMismoId(persona: Persona): boolean {
    return this.idPersona === persona.idPersona;
  }

  public puedeConducir(): boolean {
    // si el país no está en la lista su edad mínima es 18
    const edadMinima: number =
      edadConduccion.get(this.nacionalidad) ?? EDAD_MINIMA_CONDUCION;
    return this.edad >= edadMinima;
  }

  public puedeDonarA(persona: Persona): boolean {
    const posSangreDonante = tiposSanguineos.indexOf(this.tipoSanguineo);
    const posSangreReceptor = tiposSanguineos.indexOf(persona.tipoSanguineo);

    // comprobamos que ambos tipos de sangre son correctos, si no lo son (-1) entonces la respuesta será false
    if (posSangreDonante === -1 || posSangreReceptor === -1) {
      return false;
    }

    return tablaDonacion[posSangreDonante][posSangreReceptor];
  }

  public getInicialNombre(): string {
    return this.nombreCompleto.substring(0, 1).toUpperCase();
  }

  public getInicialApellido(): string {
    const listaNombre = this.nombreCompleto.split(" ");
    const longListaNombre = listaNombre.length;

    if (longListaNombre < 2) {
      return "";
    }

    const apellido = listaNombre[longListaNombre - 1];
    return apellido.substring(0, 1).toUpperCase();
  }
}
