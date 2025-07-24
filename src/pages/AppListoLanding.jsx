import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle, Loader2 } from "lucide-react";

const LandingPage = () => {
  const form = useRef();
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const honeypot = form.current["website"]?.value;
    if (honeypot) return;

    setLoading(true);
    emailjs
      .sendForm(
        "service_02ticwi",
        "template_fegs4jn",
        form.current,
        "LeDPwvRyUuJ3QStzQ"
      )
      .then(() => {
        setEnviado(true);
        form.current.reset();
        setLoading(false);
        setTimeout(() => setEnviado(false), 5000);
      })
      .catch((error) => {
        console.error("Error al enviar:", error.text);
        setLoading(false);
      });
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-10 text-center shadow-lg">
        <h1 className="text-5xl font-bold mb-2 tracking-tight">🚀 AppListo</h1>
        <p className="text-lg mb-5">Apps listas para crecer tu negocio desde hoy</p>
        <a
          href="#contacto"
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-blue-50 transition"
        >
          ¡Quiero mi app ahora!
        </a>
      </header>

      {/* Beneficios */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">¿Por qué AppListo?</h2>
        <div className="grid gap-6 md:grid-cols-3 text-left">
          {[
            "Sin necesidad de saber programación",
            "Hechas a la medida de tu negocio",
            "Despliegue en minutos"
          ].map((b, i) => (
            <div key={i} className="bg-white border border-blue-100 p-6 rounded-xl shadow hover:shadow-md transition">
              <p className="text-blue-600 text-lg font-medium">✅ {b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">Testimonios</h2>
        <div className="max-w-3xl mx-auto space-y-8 text-lg text-gray-700">
          <blockquote className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            “AppListo me ayudó a lanzar mi tienda en línea en 3 días. ¡Ya estoy vendiendo!”
            <footer className="mt-2 text-sm font-semibold text-gray-500">– Ana M., emprendedora</footer>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            “Excelente atención. Entendieron mi idea y la convirtieron en una app real.”
            <footer className="mt-2 text-sm font-semibold text-gray-500">– Luis T., técnico independiente</footer>
          </blockquote>
        </div>
      </section>

      {/* Planes */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Planes a tu medida</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 border border-blue-100 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-600 mb-2">🟢 Plan Emprende – $0</h3>
            <p className="mb-3 text-sm text-gray-700">💡 Ideal si estás empezando y necesitas claridad.</p>
            <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
              <li>🧠 Idea validada según tu negocio</li>
              <li>📘 Guía paso a paso para iniciar</li>
              <li>🎨 Diseño de ejemplo o maqueta</li>
              <li>✅ ¡Todo sin costo!</li>
            </ul>
          </div>

          <div className="bg-white p-6 border border-blue-100 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-600 mb-2">🔵 Plan Pro – $150.000 COP (pago único)</h3>
            <p className="mb-3 text-sm text-gray-700">🚀 Para emprendedores listos para avanzar.</p>
            <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
              <li>📱 App lista para usar (Android y Web)</li>
              <li>🧩 Funcionalidades personalizadas</li>
              <li>🌐 Enlace web o QR para compartir</li>
              <li>🖥️ Hosting incluido</li>
              <li>🔗 Dominio personalizado (opcional)</li>
              <li>⚙️ Panel de control simple (opcional)</li>
              <li>🛠️ Acompañamiento técnico</li>
              <li>💳 Pago único, sin mensualidades</li>
            </ul>
          </div>
        </div>

        {/* Tabla comparativa */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left font-semibold">Características</th>
                <th className="p-3 text-green-700 font-semibold">Plan Emprende</th>
                <th className="p-3 text-blue-700 font-semibold">Plan Pro</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Idea personalizada", "✅", "✅"],
                ["Guía paso a paso", "✅", "✅"],
                ["Diseño de ejemplo", "✅", "✅"],
                ["App funcional", "❌", "✅"],
                ["Panel de control", "❌", "✅"],
                ["Acompañamiento técnico", "❌", "✅"],
              ].map(([label, e, p], i) => (
                <tr key={i} className="border-t">
                  <td className="p-3">{label}</td>
                  <td className="p-3 text-center">{e}</td>
                  <td className="p-3 text-center">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">Preguntas Frecuentes</h2>
        <div className="space-y-6 text-gray-700 text-sm">
          <div>
            <p className="font-semibold text-blue-600">📆 ¿En cuánto tiempo entregan la app?</p>
            <p>Entre 3 y 7 días hábiles, según complejidad y retroalimentación.</p>
          </div>
          <div>
            <p className="font-semibold text-blue-600">💸 ¿El Plan Pro es mensual?</p>
            <p>No. Es un único pago de $150.000 COP.</p>
          </div>
          <div>
            <p className="font-semibold text-blue-600">🌐 ¿Qué incluye el hosting?</p>
            <p>12 meses de hosting gratuito. Renovación opcional luego.</p>
          </div>
          <div>
            <p className="font-semibold text-blue-600">🔗 ¿El dominio está incluido?</p>
            <p>Incluye subdominio gratuito. Personalizado se cotiza aparte.</p>
          </div>
          <div>
            <p className="font-semibold text-blue-600">📞 ¿Hay soporte?</p>
            <p>Sí. Durante y después del proceso vía WhatsApp o correo.</p>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section id="contacto" className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">¿Quieres tu app?</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-xl mx-auto space-y-4 bg-white p-8 rounded-xl shadow-md"
        >
          <input type="text" name="website" className="hidden" autoComplete="off" />
          <input
            type="text"
            name="name"
            placeholder="Tu nombre completo"
            required
            className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="¿Qué tipo de app necesitas o qué problema tienes?"
            required
            className="w-full border border-gray-300 p-3 rounded h-32 resize-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700 transition flex items-center justify-center"
          >
            {loading ? <Loader2 className="animate-spin mr-2" size={20} /> : "Enviar solicitud"}
          </button>
          {enviado && (
            <p className="text-green-600 font-medium text-center flex items-center justify-center gap-2 pt-2">
              <CheckCircle size={20} /> ¡Mensaje enviado correctamente!
            </p>
          )}
        </form>
      </section>

      <footer className="text-center text-gray-500 text-sm py-6">
        © 2025 AppListo. Creado por dazlad
      </footer>
    </div>
  );
};

export default LandingPage;
