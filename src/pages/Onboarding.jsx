import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { OnBoarding } from '@questlabs/react-sdk';
import { useAuth } from '../context/AuthContext';
import questConfig from '../config/questConfig';

const OnboardingPage = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    // Redirecionar se não estiver autenticado
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const getAnswers = () => {
    // Navegar para o dashboard após completar o onboarding
    navigate('/dashboard');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="min-h-screen flex">
        {/* Lado Esquerdo - Visual/Branding */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3" 
            alt="Primeiros Passos" 
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
                Vamos Começar!
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-200 max-w-md mx-auto mb-8"
              >
                Estamos configurando sua experiência de aprendizado personalizada. Isso levará apenas alguns minutos.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-4"
              >
                <div className="flex items-center text-gray-200">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <span>Conte-nos sobre seus interesses</span>
                </div>
                <div className="flex items-center text-gray-200">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <span>Defina seus objetivos de aprendizado</span>
                </div>
                <div className="flex items-center text-gray-200">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <span>Receba recomendações personalizadas</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Lado Direito - Componente de Onboarding */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex items-center justify-center p-8"
        >
          <div className="w-full max-w-md">
            <div className="text-center mb-8 lg:hidden">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Vamos Começar!</h2>
              <p className="text-gray-600">Personalize sua experiência de aprendizado</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8" style={{ minHeight: '400px' }}>
              <OnBoarding
                userId={user.userId}
                token={user.token}
                questId={questConfig.QUEST_ONBOARDING_QUESTID}
                answer={answers}
                setAnswer={setAnswers}
                getAnswers={getAnswers}
                singleChoose="modal1"
                multiChoice="modal2"
                translations={{
                  next: "Próximo",
                  back: "Voltar",
                  submit: "Enviar",
                  done: "Concluir",
                  select: "Selecione",
                  multiSelect: "Selecione vários",
                  inputPlaceholder: "Digite sua resposta",
                  questionCountOf: "de"
                }}
              >
                <OnBoarding.Header />
                <OnBoarding.Content />
                <OnBoarding.Footer />
              </OnBoarding>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OnboardingPage;