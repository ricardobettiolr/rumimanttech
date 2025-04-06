import React from "react";

export default function RuminantsTechLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="bg-green-800 text-white p-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ruminants Technologies</h1>
          <button className="bg-white text-green-800 font-semibold px-4 py-2 rounded-full hover:bg-gray-100">
            Contact Us
          </button>
        </div>
      </header>

      <section className="bg-green-100 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Tecnología de precisión para rumiantes</h2>
        <p className="text-lg mb-8">Soluciones innovadoras para salud, reproducción y productividad animal</p>
        <button className="bg-green-800 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700">
          Explora nuestros productos
        </button>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-12 text-center">¿Qué ofrecemos?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <img src="https://images.unsplash.com/photo-1605542231615-3e2c2adbb33a" alt="Equipo para OPU" className="rounded-xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Equipos para OPU</h4>
            <p>Dispositivos avanzados para aspiración folicular en bovinos y equinos.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <img src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6" alt="Sensor salud animal" className="rounded-xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Sensores de salud animal</h4>
            <p>Monitoreo en tiempo real del bienestar y productividad del ganado.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <img src="https://images.unsplash.com/photo-1597755120886-cd81256e6a55" alt="Gestión reproductiva" className="rounded-xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Gestión reproductiva</h4>
            <p>Herramientas inteligentes para planificación y seguimiento reproductivo.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <img src="https://images.unsplash.com/photo-1602189421586-b3da6a37f80f" alt="Tecnología portátil de campo" className="rounded-xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Tecnología portátil de campo</h4>
            <p>Equipos duraderos y fáciles de usar para uso veterinario en exteriores.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <img src="https://images.unsplash.com/photo-1549924231-f129b911e442" alt="Software de trazabilidad" className="rounded-xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Software de trazabilidad</h4>
            <p>Registro digital del historial productivo, sanitario y genético del animal.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <img src="https://images.unsplash.com/photo-1607522370275-f132edb190a1" alt="Soporte técnico" className="rounded-xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Soporte técnico especializado</h4>
            <p>Acompañamiento y asesoría por veterinarios expertos en reproducción animal.</p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-16 text-center">
        <h3 className="text-3xl font-bold mb-4">¿Listo para modernizar tu ganadería?</h3>
        <p className="mb-8 text-lg">Contacta con nosotros hoy y solicita una demo o cotización personalizada</p>
        <button className="bg-green-800 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700">
          Solicita una demo
        </button>
      </section>

      <section className="py-16 text-center bg-yellow-50">
        <h3 className="text-2xl font-bold mb-4">💼 This domain is for sale</h3>
        <p className="mb-4">Interested in acquiring <strong>ruminanttech.com</strong>?</p>
        <p className="text-lg font-semibold">💌 Contact: <a href="mailto:sales@fertilityfurrow.com" className="text-green-700 underline">sales@fertilityfurrow.com</a></p>
      </section>

      <footer className="bg-green-800 text-white p-6 text-center">
        <p>&copy; {new Date().getFullYear()} Ruminants Technologies. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
