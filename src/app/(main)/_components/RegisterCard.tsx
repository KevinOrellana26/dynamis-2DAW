import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/components.lib";
import React from "react";

type RegisterCardT = {
  title: string;
  num: number | string;
  className?: string;
  classContent?: string;
};

function RegisterCard(props: RegisterCardT) {
  const { title, num, className, classContent } = props;
  return (
    <Card className={cn("gap-1", className)}>
      <CardHeader>
        <CardTitle className="text-xl md:text-4xl mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent
        className={cn("text-lg md:text-2xl font-bold", classContent)}
      >
        {num}
      </CardContent>
    </Card>
  );
}

export default RegisterCard;
