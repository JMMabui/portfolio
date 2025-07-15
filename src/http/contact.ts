type Contact = {
  name: string
  email: string
  message: string
  preferredMethod: string
  userContact: string
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3333'

export async function sendContactEmail(contact: Contact) {
  const response = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  })
  if (!response.ok) {
    const errorMessage = await response.text()
    throw new Error(`Erro ao criar a avaliação: ${errorMessage}`)
  }

  return response.json()
}
