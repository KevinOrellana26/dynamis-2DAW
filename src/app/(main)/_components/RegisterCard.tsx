import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

type RegisterCardT = {
  title: string;
  num: number;
}

function RegisterCard({ title, num }: RegisterCardT) {
  return (
    <Card className="gap-1">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-lg md:text-4xl font-bold">{num}</CardContent>
    </Card>
  );
}

export default RegisterCard;
