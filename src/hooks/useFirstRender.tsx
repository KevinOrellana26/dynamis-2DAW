import { useRef, useEffect, useState } from "react";

// cuando utilice localStorage


//Detecta solo el primer render de un componente, los siguientes serán false
export const useFirstRender = () => {
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return firstRender.current;
};

// Detecta cuando el componente ha sido hidratado
// evitar el problema "hydration mismatch"
// Casos de uso: 
// - Acceder a APIs del navegador, como localStorage solo después de la hidratación.
export const useHydrated = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated;
};
