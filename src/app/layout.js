import './globals.css'


export const metadata = {
  title: 'Pilas',
  description: 'Ejemplo de pilas con lista de tareas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="container mx-auto w-screen">{children}</body>
    </html>
  )
}
