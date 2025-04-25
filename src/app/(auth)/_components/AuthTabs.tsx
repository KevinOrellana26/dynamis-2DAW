"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useState } from "react";
import LoginForm from "@/app/(auth)/_components/LoginForm";
import RegisterForm from "@/app/(auth)/_components/RegisterForm";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth",
};

type DescriptionType = "login" | "register";

function AuthTabs() {
  const [currentTab, setCurrentTab] = useState<DescriptionType>("login");

  const descriptions: Record<DescriptionType, string> = {
    login: "Inicia sesión para acceder a tu dashboard personal",
    register: "Crea una cuenta para comenzar tu entrenamiento",
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
        defaultValue="login"
        onValueChange={(value) => {
          //! DEBUG
          console.log("valor recibido: ", value);
          setCurrentTab(value as DescriptionType);
        }}
        value={currentTab}
      >
        <TabsList className="w-full mb-3">
          <TabsTrigger value="login">Iniciar sesión</TabsTrigger>
          <TabsTrigger value="register">Registrarse</TabsTrigger>
        </TabsList>

        {/* Content Login */}
        <TabsContent value="login">
          <CardContent>
            <LoginForm />
          </CardContent>
        </TabsContent>

        {/* Content Registro */}
        <TabsContent value="register">
          <CardContent>
            <RegisterForm onRegister={() => setCurrentTab("login")} />
          </CardContent>
        </TabsContent>
      </Tabs>
    </Card>
  );
}

export default AuthTabs;
