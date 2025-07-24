import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { QuestLogin } from '@questlabs/react-sdk';
import { useAuth } from '../context/AuthContext';
import questConfig from '../config/questConfig';

const Login = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    // Redirecionar se já estiver autenticado
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = ({ userId, token, newUser }) => {
    login({ userId, token });
    
    if (newUser) {
      navigate('/onboarding');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="min-h-screen flex">
        {/* Lado Esquerdo - Branding */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3" 
            alt="Aprendendo Juntos" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="text-center text-white">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl lg:text-5xl font-bold mb-6"
              >
                Bem-vindo de volta ao LearnHub
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-200 max-w-md mx-auto"
              >
                Continue sua jornada de aprendizado com milhares de cursos de instrutores especialistas
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 grid grid-cols-3 gap-6 text-center"
              >
                <div>
                  <div className="text-2xl font-bold">1M+</div>
                  <div className="text-gray-200">Alunos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">5K+</div>
                  <div className="text-gray-200">Cursos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-gray-200">Instrutores</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Lado Direito - Formulário de Login */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex items-center justify-center p-8"
        >
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Entrar</h2>
              <p className="text-gray-600">Acesse seu painel de aprendizado</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <QuestLogin
                onSubmit={handleLogin}
                email={true}
                google={false}
                accent={questConfig.PRIMARY_COLOR}
                translations={{
                  title: "Entrar",
                  subtitle: "Bem-vindo de volta! Entre com sua conta",
                  email: "E-mail",
                  emailPlaceholder: "Digite seu e-mail",
                  password: "Senha",
                  passwordPlaceholder: "Digite sua senha",
                  loginButton: "Entrar",
                  signupButton: "Registrar",
                  forgotPassword: "Esqueceu sua senha?",
                  noAccount: "Não tem uma conta?",
                  signupLink: "Cadastre-se",
                  emailError: "Por favor, insira um e-mail válido",
                  passwordError: "Senha deve ter pelo menos 6 caracteres",
                  or: "ou",
                  withGoogle: "Continuar com Google",
                  emailOrPassword: "E-mail ou senha incorretos",
                  somethingWrong: "Algo deu errado. Tente novamente."
                }}
              />
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Não tem uma conta?{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Cadastre-se gratuitamente
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;