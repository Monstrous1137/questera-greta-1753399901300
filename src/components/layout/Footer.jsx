import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    empresa: ['Sobre Nós', 'Carreiras', 'Imprensa', 'Blog'],
    suporte: ['Central de Ajuda', 'Contato', 'Termos de Serviço', 'Política de Privacidade'],
    recursos: ['Catálogo de Cursos', 'Trilhas de Aprendizado', 'Empresas', 'Instrutores'],
    comunidade: ['Histórias de Sucesso', 'Depoimentos', 'Parceiros', 'Programa de Afiliados'],
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Seção da Marca */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="text-2xl font-bold text-white">LearnHub</Link>
            <p className="mt-4 text-gray-400">
              Capacitando mentes através de educação de qualidade. Junte-se a milhões de alunos em todo o mundo.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaYoutube size={24} /></a>
            </div>
          </div>

          {/* Seções de Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1">
              <h3 className="text-lg font-semibold capitalize mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link to="#" className="text-gray-400 hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>© {new Date().getFullYear()} LearnHub. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;