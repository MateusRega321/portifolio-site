import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Mail, Code, Palette, Smartphone, Zap } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Fixed Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-white/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              MR
            </div>
            <div className="flex space-x-8">
              {[
                { id: 'home', label: 'Início' },
                { id: 'skills', label: 'Habilidades' },
                { id: 'projects', label: 'Projetos' },
                { id: 'contact', label: 'Contato' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 font-medium ${
                    activeSection === item.id
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-indigo-600/10"></div>
        <div className="text-center z-10 px-6">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              MR
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Mateus Rega
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
            Frontend Developer
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Criando experiências digitais excepcionais com código limpo, design moderno e foco em performance.
          </p>
          <button 
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center mx-auto space-x-2"
          >
            <span>Ver Projetos</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-purple-300 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-indigo-300 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute top-1/2 right-1/6 w-8 h-8 bg-blue-300 rounded-full animate-ping opacity-25"></div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Habilidades
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções web modernas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: 'Linguagens',
                skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
                color: 'from-orange-400 to-red-500'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Frameworks',
                skills: ['React', 'Next.js', 'Tailwind CSS', 'Vite'],
                color: 'from-blue-400 to-cyan-500'
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: 'Design',
                skills: ['UI/UX Design', 'Design Responsivo', 'Prototipação', 'Design Systems'],
                color: 'from-purple-400 to-pink-500'
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: 'Especialidades',
                skills: ['PWA', 'Performance', 'Acessibilidade', 'SEO'],
                color: 'from-green-400 to-emerald-500'
              }
            ].map((category, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-600 flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Projetos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alguns dos meus trabalhos recentes que demonstram minhas habilidades técnicas
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
  <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
    <div className="h-64 bg-gradient-to-br from-purple-500 to-indigo-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute bottom-4 left-6 right-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">FazTudo</h3>
          <div className="flex space-x-1">
            <span className="px-3 py-1 bg-purple-200 text-purple-700 text-sm rounded-full">PWA</span>
            <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">React</span>
            <span className="px-2 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">Firebase</span>
            <span className="px-2 py-1 bg-green-100 text-green-700 text-sm rounded-full">Automação</span>
          </div>
        </div>
      </div>
    </div>
    <div className="p-8">
      <p className="text-gray-600 mb-6 leading-relaxed">
        O FazTudo é um aplicativo de automações pessoais em português, inspirado no Zapier. 
        Ele permite criar fluxos com voz, funciona no modo offline-first e integra inteligência 
        artificial para simplificar o dia a dia de estudantes e empreendedores.
      </p>
      <div className="flex space-x-4">
        <a
          href="https://github.com/mateusrega/FazTudo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold"
        >
          <Code className="w-4 h-4" />
          <span>Ver Código</span>
        </a>
        <a
          href="https://faz-tudo-sigma.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-semibold"
        >
          <span>Demo Live</span>
        </a>
      </div>
    </div>
  </div>
</div>

            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-indigo-500 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Landing Page Demo</h3>
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Landing</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Conversão</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full">Design</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                Exemplo de landing page profissional com foco em conversão, design moderno, otimização para SEO e código limpo e bem estruturado.
                </p>
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold">
                    <Code className="w-4 h-4" />
                    <span>Ver Código</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-semibold">
                    <span>Demo Live</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contato
            </h2>
            <p className="text-xl text-gray-600">
              Vamos conversar sobre seu próximo projeto
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <a 
                    href="mailto:mateus.rega@escola.pr.gov.br" 
                    className="text-purple-600 hover:text-purple-700 transition-colors duration-200"
                  >
                    mateus.rega@escola.pr.gov.br
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">GitHub</h3>
                  <a 
                    href="https://github.com/MateusRega321" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
                  >
                    github.com/MateusRega321
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Disponível para projetos</h3>
              <p className="text-purple-100 mb-6 leading-relaxed">
                Estou sempre em busca de novos desafios e oportunidades para criar experiências digitais incríveis. Vamos trabalhar juntos?
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-purple-100">Disponível para freelance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-purple-100">Resposta em até 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Mateus Rega
              </div>
              <p className="text-gray-400 mt-1">Frontend Developer</p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="mailto:mateus.rega@escola.pr.gov.br"
                className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/MateusRega321"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 Mateus Rega. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
