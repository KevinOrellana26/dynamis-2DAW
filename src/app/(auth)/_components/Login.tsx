"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import LoginForm from "@/app/(auth)/_components/LoginForm";
import RegisterForm from "@/app/(auth)/_components/RegisterForm";
import { useState } from "react";

type DescriptionType = "iniciar-sesion" | "registrarse";

function Login() {
  const [currentTab, setCurrentTab] =
    useState<DescriptionType>("iniciar-sesion");

  const descriptions: Record<DescriptionType, string> = {
    "iniciar-sesion": "Inicia sesión para acceder a tu dashboard personal",
    registrarse: "Crea una cuenta para comenzar tu entrenamiento",
  };

  return (
    <Card className="p-8 md:p-14 w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center font-bold text-2xl text-[#2057A9]">
          Bienvenido a Dýnamis
        </CardTitle>
        <CardDescription className="text-center">
          {descriptions[currentTab]}
        </CardDescription>
      </CardHeader>

      <Tabs
        defaultValue="iniciar-sesion"
        onValueChange={(value) => {
          //! DEBUG
          console.log("valor recibido: ", value);
          setCurrentTab(value as DescriptionType);
        }}
      >
        <TabsList className="w-full mb-3">
          <TabsTrigger value="iniciar-sesion">Iniciar sesión</TabsTrigger>
          <TabsTrigger value="registrarse">Registrarse</TabsTrigger>
        </TabsList>

        {/* Content Login */}
        <TabsContent value="iniciar-sesion">
          <CardContent>
            <LoginForm />
          </CardContent>
        </TabsContent>

        {/* Content Registro */}
        <TabsContent value="registrarse">
          <CardContent>
            <RegisterForm />
          </CardContent>
        </TabsContent>
      </Tabs>
    </Card>
  );
}

export default Login;
