import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Benefits = {
  title: string;
  subtitle: string;
  icon: React.ReactNode; //cualquier componente de react como icono
};

export default function BenefitsCard({ title, subtitle, icon }: Benefits) {
  return (
    <Card>
      <div className="ml-6 pt-5">{icon}</div>
      <CardHeader className="gap-0">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="font-light">{subtitle}</CardContent>
    </Card>
  );
}
