import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const Listas = () => {
  const navigate = useNavigate();
  
  const forms = [
    { id: 1, name: 'Lista Cuentadantes', description: 'Lista de todos los cuentadantes', route: '/cuentadantes/lista' },
    { id: 2, name: 'Lista Subsedes ', description: 'Lista de todas las subsedes', route: '/subsedes/lista' },
    { id: 3, name: 'Lista Dependencias ', description: 'Lista de todas las dependencias', route: '/dependencias/lista' },
    { id: 4, name: 'Lista Ambientes ', description: 'Lista de todos los ambientes', route: '/ambientes/lista' },
    { id: 5, name: 'Lista Tipo Equipos', description: 'Lista de todos los tipos de equipos', route: '/tipoEquipos/lista' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-12">
      <Card className="p-4">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold mb-4">Lista</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {forms.map((form) => (
            <div
              key={form.id}
              className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer"
              onClick={() => navigate(form.route)}
            >
              <h3 className="text-xl font-semibold">{form.name}</h3>
              <p className="text-gray-600">{form.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

