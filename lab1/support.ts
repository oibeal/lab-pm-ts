export const generoPersona: string[] = ['H', 'M'];
export const tiposSanguineos: Array<string> = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
export const tablaDonacion: Array<Array<boolean>> = [
    // ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
    [true, false, false, false, true, false, false, false], // A+
    [true, true, false, false, true, true, false, false], // A-
    [false, false, true, false, true, false, false, false], // B+
    [false, false, true, true, true, true, false, false], // B-
    [false, false, false, false, true, false, false, false], // AB+
    [false, false, false, false, true, true, false, false], // AB-
    [true, false, true, false, true, false, true, false], // O+
    [true, true, true, true, true, true, true, true] // O-
];

export const edadConduccion = new Map<string, number>([
    ['Etiopia', 14],
    ['Australia', 16],
    ['Estados Unidos', 16],
    ['Reino Unido', 17]
]);

export const EDAD_MINIMA_CONDUCION = 18;