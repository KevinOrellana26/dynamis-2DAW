// referencia a el fichero auth.js
import { handlers } from "@/app/(auth)/_core/auth/auth.lib"

// Añade un Middleware opcional para mantener viva la sesión, 
// esto actualizará la expiración de la sesión cada vez que sea llamado.
export { auth as middleware } from "@/app/(auth)/_core/auth/auth.lib"
export const { GET, POST } = handlers
