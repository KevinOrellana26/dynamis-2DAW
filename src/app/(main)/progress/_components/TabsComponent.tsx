import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SummarizeComponent from "./SummarizeComponent";
import WeightComponent from "./WeightComponent";
import StrongComponent from "./StrongComponent";
import SizeCompontent from "./SizeCompontent";

export default function TabsComponent() {
  return (
    <Tabs defaultValue="resumen">
      <TabsList className="w-full my-6">
        <TabsTrigger value="resumen" className="cursor-pointer">
          Resumen
        </TabsTrigger>
        <TabsTrigger value="peso" className="cursor-pointer">
          Peso
        </TabsTrigger>
        <TabsTrigger value="fuerza" className="cursor-pointer">
          Fuerza
        </TabsTrigger>
        <TabsTrigger value="medidas" className="cursor-pointer">
          Medidas
        </TabsTrigger>
      </TabsList>

      {/* Content resumen */}
      <TabsContent value="resumen">
        <SummarizeComponent />
      </TabsContent>

      {/* Content peso */}
      <TabsContent value="peso">
        <WeightComponent />
      </TabsContent>

      {/* Content fuerza */}
      <TabsContent value="fuerza">
        <StrongComponent />
      </TabsContent>

      {/* Content medidas */}
      <TabsContent value="medidas">
        <SizeCompontent />
      </TabsContent>
    </Tabs>
  );
}
