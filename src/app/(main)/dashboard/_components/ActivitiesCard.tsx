import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

type ActivitiesCardProps = {
  title: string;
  num: number;
}

function ActivitiesCard({ title, num }: ActivitiesCardProps) {
  return (
    <Card className="gap-2">
      <CardHeader>
        <CardTitle className="text-3xl mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-xl font-bold">{num}</CardContent>
    </Card>
  );
}

export default ActivitiesCard;
