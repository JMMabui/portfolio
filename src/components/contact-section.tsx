import { useState } from 'react'
import { sendContactEmail } from '../http/contact'
import { useScrollReveal } from '../lib/utils'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const contactMethods = [
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'email', label: 'E-mail' },
  { value: 'sms', label: 'SMS' },
  { value: 'telegram', label: 'Telegram' },
  { value: 'outro', label: 'Outro' },
]

export function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [method, setMethod] = useState('whatsapp')
  const [userContact, setUserContact] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const revealRef = useScrollReveal<HTMLFormElement>()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setSuccess(null)
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)
    setError(null)
    try {
      await sendContactEmail({
        ...formData,
        preferredMethod: method,
        userContact,
      })
      setSuccess('Mensagem enviada com sucesso!')
      setFormData({ name: '', email: '', message: '' })
      setUserContact('')
      setMethod('whatsapp')
    } catch {
      setError('Falha ao enviar mensagem. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  const getContactPlaceholder = () => {
    switch (method) {
      case 'whatsapp':
        return 'Seu número de WhatsApp'
      case 'email':
        return 'Seu e-mail'
      case 'sms':
        return 'Seu número de celular'
      case 'telegram':
        return 'Seu usuário ou número do Telegram'
      default:
        return 'Seu contato'
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-300">Entre em Contato</h2>
      <form ref={revealRef} onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <Card className="bg-gray-900/95 border border-gray-700 rounded-2xl shadow-2xl animate-fade-in-up">
          <CardHeader>
            <CardTitle className="text-blue-300 text-2xl mb-2">Fale comigo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm text-gray-300 mb-1 font-semibold">Como prefere ser contatado?</label>
              <Select value={method} onValueChange={setMethod}>
                <SelectTrigger className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all duration-200 placeholder:text-gray-500">
                  <SelectValue placeholder="Escolha o método" />
                </SelectTrigger>
                <SelectContent>
                  {contactMethods.map(opt => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1 font-semibold">Seu contato</label>
              <Input
                type={method === 'email' ? 'email' : 'text'}
                name="userContact"
                id="userContact"
                value={userContact}
                onChange={e => setUserContact(e.target.value)}
                required
                placeholder={getContactPlaceholder()}
                aria-label="Seu contato"
                className="bg-gray-800 border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all duration-200 placeholder:text-gray-500"
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm text-gray-300 mb-1 font-semibold">Nome</label>
              <Input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                placeholder="Seu nome"
                aria-label="Nome"
                className="bg-gray-800 border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all duration-200 placeholder:text-gray-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-gray-300 mb-1 font-semibold">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Digite sua mensagem..."
                aria-label="Mensagem"
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all duration-200 placeholder:text-gray-500 min-h-[96px]"
              />
            </div>
            {success && <div className="text-green-400 text-center font-semibold animate-fade-in-up">{success}</div>}
            {error && <div className="text-red-400 text-center font-semibold animate-fade-in-up">{error}</div>}
            <Button
              type="submit"
              className="w-full text-lg font-bold py-3 flex items-center justify-center gap-2"
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>
                  Enviando...
                </span>
              ) : (
                'Enviar Mensagem'
              )}
            </Button>
          </CardContent>
        </Card>
      </form>
    </section>
  )
}
