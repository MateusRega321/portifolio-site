import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Mail, Code, Palette, Smartphone, Zap, ExternalLink, Menu, X, ArrowRight } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contato' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-x-hidden">
      {/* Cursor follower */}
      <div 
        className="fixed w-6 h-6 bg-purple-500/20 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out hidden lg:block"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />

      {/* Fixed Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-purple-100/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              MR
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 font-medium relative overflow-hidden group ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeSection !== item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-purple-50 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'max-h-64 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl border-t border-purple-100/50 px-4 py-4">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium mb-2 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                    : 'text-gray-700 hover:bg-purple-50'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/6 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/6 w-20 h-20 bg-gradient-to-br from-rose-400/20 to-orange-400/20 rounded-full animate-pulse"></div>
        </div>

        <div className="text-center z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="mb-8 lg:mb-12">
            <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-8 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl lg:text-4xl font-bold shadow-2xl hover:scale-110 transition-transform duration-500 cursor-pointer">
              MR
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            Mateus Rega
          </h1>
          
          <div className="relative mb-8">
            <p className="text-xl sm:text-2xl lg:text-4xl text-gray-600 font-light">
              Frontend Developer
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
          </div>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Criando experiências digitais excepcionais com código limpo, design moderno e foco em performance. 
            Transformo ideias em realidade digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>Ver Projetos</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="group border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              <span>Entrar em Contato</span>
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-purple-600" />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Habilidades
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Tecnologias e ferramentas que domino para criar soluções web modernas e performáticas
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: 'Linguagens',
                skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
                color: 'from-orange-400 to-red-500',
                delay: '0ms'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Frameworks',
                skills: ['React', 'Next.js', 'Tailwind CSS', 'Vite'],
                color: 'from-blue-400 to-cyan-500',
                delay: '100ms'
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: 'Design',
                skills: ['UI/UX Design', 'Design Responsivo', 'Prototipação', 'Design Systems'],
                color: 'from-purple-400 to-pink-500',
                delay: '200ms'
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: 'Especialidades',
                skills: ['PWA', 'Performance', 'Acessibilidade', 'SEO'],
                color: 'from-green-400 to-emerald-500',
                delay: '300ms'
              }
            ].map((category, index) => (
              <div 
                key={index}
                className="group bg-white p-6 lg:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 relative overflow-hidden"
                style={{ animationDelay: category.delay }}
              >
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${category.color} rounded-2xl lg:rounded-3xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-gray-600 flex items-center group-hover:text-gray-700 transition-colors duration-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-purple-600 transition-colors duration-300"></div>
                        <span className="text-sm lg:text-base">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-purple-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Projetos
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Alguns dos meus trabalhos recentes que demonstram minhas habilidades técnicas e criatividade
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* FazTudo Project */}
            <div className="group bg-white rounded-3xl lg:rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden hover:-translate-y-4">
              <div className="h-48 sm:h-56 lg:h-72 bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Animated Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/30 rounded-full animate-bounce"></div>
                
                <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 lg:p-6 transform group-hover:scale-105 transition-transform duration-500">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">FazTudo</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-200 text-purple-700 text-xs lg:text-sm rounded-full font-medium">PWA</span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs lg:text-sm rounded-full font-medium">React</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs lg:text-sm rounded-full font-medium">Firebase</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs lg:text-sm rounded-full font-medium">Automação</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 lg:p-8">
                <p className="text-gray-600 mb-6 lg:mb-8 leading-relaxed text-sm lg:text-base">
                  App FazTudo é uma plataforma de automação com diversas tecnologia avançadas
                  e ao mesmo tempo simples e intuitiva, focada na realidade brasileira todos 
                  os recursos básico são gratuito, e, foi construída para atender necessidades 
                  de criadores de conteúdo, freelancers e pequenas empresas. Infelizmente ele 
                  ainda não está disponível, pois, está em desenvolvimento.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://github.com/mateusrega/FazTudo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center justify-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold bg-purple-50 hover:bg-purple-100 px-6 py-3 rounded-xl transition-all duration-300"
                  >
                    <Code className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
                    <span>Ver Código</span>
                  </a>
                  <a
                    href="https://faz-tudo-sigma.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-700 font-semibold bg-gray-50 hover:bg-gray-100 px-6 py-3 rounded-xl transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                    <span>Demo Live</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Landing Page Project */}
            <div className="group bg-white rounded-3xl lg:rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden hover:-translate-y-4">
              <div className="h-48 sm:h-56 lg:h-72 bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Animated Elements */}
                <div className="absolute top-6 left-6 w-6 h-6 bg-white/30 rounded-full animate-ping"></div>
                <div className="absolute top-1/2 right-8 w-4 h-4 bg-white/40 rounded-full animate-pulse"></div>
                
                <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 lg:p-6 transform group-hover:scale-105 transition-transform duration-500">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">trabalho</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs lg:text-sm rounded-full font-medium">1</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs lg:text-sm rounded-full font-medium">2</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs lg:text-sm rounded-full font-medium">3</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs lg:text-sm rounded-full font-medium">4</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 lg:p-8">
                <p className="text-gray-600 mb-6 lg:mb-8 leading-relaxed text-sm lg:text-base">
                 descrição 
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group/link flex items-center justify-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold bg-purple-50 hover:bg-purple-100 px-6 py-3 rounded-xl transition-all duration-300">
                    <Code className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
                    <span>Ver Código</span>
                  </button>
                  <button className="group/link flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-700 font-semibold bg-gray-50 hover:bg-gray-100 px-6 py-3 rounded-xl transition-all duration-300">
                    <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                    <span>Demo Live</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Contato
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600">
              Vamos conversar sobre seu próximo projeto
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6 lg:space-y-8">
              <div className="group flex items-center space-x-4 lg:space-x-6 p-6 lg:p-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl lg:rounded-3xl hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Mail className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-1">Email</h3>
                  <a 
                    href="mailto:mateus.rega@escola.pr.gov.br" 
                    className="text-purple-600 hover:text-purple-700 transition-colors duration-200 text-sm lg:text-base break-all"
                  >
                    mateus.rega@escola.pr.gov.br 
                  </a>
                </div>
              </div>

              <div className="group flex items-center space-x-4 lg:space-x-6 p-6 lg:p-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl lg:rounded-3xl hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Github className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-1">GitHub</h3>
                  <a 
                    href="https://github.com/MateusRega321" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-700 transition-colors duration-200 text-sm lg:text-base"
                  >
                    github.com/MateusRega321
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-3xl lg:rounded-[2rem] p-6 lg:p-10 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 border border-white/30 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/20 rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8">Disponível para projetos</h3>
                <p className="text-purple-100 mb-6 lg:mb-8 leading-relaxed text-sm lg:text-base">
                  Estou sempre em busca de novos desafios e oportunidades para criar 
                  experiências digitais incríveis. Vamos trabalhar juntos para transformar 
                  sua ideia em realidade?
                </p>
                
                <div className="space-y-4 lg:space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-purple-100 text-sm lg:text-base">Disponível para freelance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-purple-100 text-sm lg:text-base">Resposta em até 24h</span>
                  </div>
                  <div className="flex items-center space-x-3">
                </div>
                <button 
                  onClick={() => window.open('mailto:mateus.rega@escola.pr.gov.br', '_blank')}
                  className="mt-8 bg-white text-purple-600 px-6 lg:px-8 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-semibold hover:bg-purple-50 hover:scale-105 transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center"
                >
                  <Mail className="w-5 h-5" />
                  <span>Enviar Email</span>
                </button>
              </div>
            </div>
          </div>
        </div>
          </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
            <div className="mb-6 lg:mb-0 text-center lg:text-left">
              <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                Mateus Rega
              </div>
              <p className="text-gray-400 text-sm lg:text-base">Frontend Developer</p>
            </div>
            
            <div className="flex space-x-4 lg:space-x-6">
              <a 
                href="mailto:mateus.rega@escola.pr.gov.br"
                className="group w-12 h-12 lg:w-14 lg:h-14 bg-purple-600 hover:bg-purple-700 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-3"
              >
                <Mail className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://github.com/MateusRega321"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 lg:w-14 lg:h-14 bg-gray-700 hover:bg-gray-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-3"
              >
                <Github className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm lg:text-base">
              &copy; 2025 Mateus Rega. Todos os direitos reservados. Desenvolvido com ❤️ e muito café.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
