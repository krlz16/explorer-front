import React from "react";
import ToolTip from "@/components/ui/ToolTip";

// Definimos los componentes disponibles.
const componentMap: Record<string, React.ComponentType<any>> = {
  ToolTip,
  UnclesList: ({ value }: { value: string[] }) => (
    <div>
      {value.map((uncle, i) => (
        <div key={i}>{uncle}</div>
      ))}
    </div>
  ),
};

interface InfoItem {
  label: React.ReactNode;
  value: any; // Valor del campo.
  component?: string; // Nombre del componente en `componentMap`.
  props?: Record<string, any>; // Props adicionales para el componente.
}

interface props {
  items: InfoItem[]; // Lista de elementos.
}

const DataList = ({ items }: props) => {
  return (
    <div className="mt-10 text-white-400">
      {items.map((item, index) => {
        const ValueComponent = item.component ? componentMap[item.component] : null; // Buscamos el componente en el mapa.
        return (
          <div key={index} className="flex items-center py-3">
            <div className="w-3/12 flex items-center gap-2">
              <div className="bg-neutral-800 rounded-xl flex justify-center items-center text-white-100 text-xs w-4 h-4">
                i
              </div>
              {item.label}
            </div>
            <div className="w-9/12 text-white-100 break-words">
              {ValueComponent ? (
                <ValueComponent {...item.props} value={item.value} />
              ) : (
                item.value
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DataList;
