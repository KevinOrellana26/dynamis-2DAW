import bcrypt from "bcryptjs"


// Lógica para aplicar "salting" y hashing a una contraseña
// -> salting: valor aleatorio único a cada contraseña antes de hashearla. Ej: "contrasña: secreto", 
// se le añade "aB3!xK" quedando "secretoaB3!xK"
// -> hashing: convertir en hash. Transforma la contraseña (ya con la sal) en un valor irreversible mediante
// algoritmos como bcrypt
// const pwHash = saltAndHashPassword(credentials.password as string)

// Función para generar salt y hash de contraseña
export async function saltAndHashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

// Función para verificar contraseña para Login
export async function verifyPassword(
    password: string,
    hashedPassword: string
): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword)
}