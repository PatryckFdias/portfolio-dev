import './globals.css'

export const metadata = {
  title: 'Patryck Fragoso | Desenvolvedor Full Stack',
  description: 'Portfólio de Engenharia de Software e Automação',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      {/* O body agora carrega estritamente o conteúdo do page.js, sem navbars duplicadas */}
      <body className="antialiased bg-[#030712]">
        {children}
      </body>
    </html>
  )
}