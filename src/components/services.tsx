import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export function Services() {
  const services = [
    {
      title: "Websites e Aplicativos",
      icon: "💻",
      description: "Desenvolvimento de interfaces modernas e responsivas para web e mobile.",
    },
    {
      title: "API e Banco de Dados",
      icon: "🛠️",
      description: "Criação de serviços backend escaláveis e integração com bancos de dados.",
    },
    {
      title: "Montagem e Reparação",
      icon: "🔧",
      description: "Manutenção de hardware, redes e infraestrutura de TI.",
    },
  ]

  return (
    <section id="services" className="bg-gray-900 py-20 px-4 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Meus Serviços</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Card
            key={index}
            className="bg-gray-800 border-none shadow-lg hover:shadow-blue-500/20 transition duration-300"
          >
            <CardHeader className="flex flex-col items-center justify-center space-y-2">
              <span className="text-5xl">{service.icon}</span>
              <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 text-sm mt-2">
              {service.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
