import { AuthenticationError } from "@/app/_shared/errors";
import { createServerActionProcedure } from "zsa";
import { getSession } from "../auth/auth.actions";

export const authedProcedure = createServerActionProcedure().handler(
  async () => {
    try {
      const user = await getSession();
      if (!user) throw new AuthenticationError("Usuario no identificado");
      return {
        user,
      };
    } catch {
      throw new AuthenticationError("Usuario no identificado");
    }
  }
);
