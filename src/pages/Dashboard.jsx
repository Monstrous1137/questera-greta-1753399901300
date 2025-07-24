import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { FiBook, FiTrendingUp, FiAward, FiClock, FiPlay, FiBookmark } from 'react-icons/fi';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const stats = [
    { icon: FiBook, label: 'Cursos Matriculados', value: '12', color: 'bg-blue-100 text-blue-600' },
    { icon: FiAward, label: 'Certificados Obtidos', value: '5', color: 'bg-green-100 text-green-600' },
    { icon: FiClock, label: 'Horas Aprendidas', value: '87', color: 'bg-purple-100 text-purple-600' },
    { icon: FiTrendingUp, label: 'Dias de Sequência', value: '15', color: 'bg-orange-100 text-orange-600' }
  ];

  const recentCourses = [
    {
      id: 1,
      title: 'Bootcamp Completo de Desenvolvimento Web',
      progress: 65,
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3',
      instructor: 'João Silva'
    },
    {
      id: 2,
      title: 'Ciência de Dados com Python',
      progress: 30,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3',
      instructor: 'Maria Santos'
    },
    {
      id: 3,
      title: 'Fundamentos de UI/UX Design',
      progress: 85,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3',
      instructor: 'Ana Rodriguez'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cabeçalho */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Bem-vindo de volta!</h1>
            <p className="text-gray-600">Continue sua jornada de aprendizado</p>
          </div>
          <button
            onClick={logout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Sair
          </button>
        </div>

        {/* Cards de Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center mr-4`}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Continuar Aprendendo */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Aprendendo</h2>
            <div className="space-y-6">
              {recentCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img
                        className="h-48 w-full md:w-48 object-cover"
                        src={course.image}
                        alt={course.title}
                      />
                    </div>
                    <div className="p-6 flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                      <p className="text-gray-600 mb-4">por {course.instructor}</p>
                      
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Progresso</span>
                          <span className="text-sm font-medium text-gray-700">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                        <FiPlay className="mr-2" />
                        Continuar Aprendendo
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Barra Lateral */}
          <div className="space-y-6">
            {/* Ações Rápidas */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Ações Rápidas</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
                  <FiBook className="mr-3 text-blue-600" />
                  Explorar Cursos
                </button>
                <button className="w-full flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
                  <FiBookmark className="mr-3 text-green-600" />
                  Meus Favoritos
                </button>
                <button className="w-full flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
                  <FiAward className="mr-3 text-purple-600" />
                  Certificados
                </button>
              </div>
            </div>

            {/* Conquistas */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Conquistas Recentes</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                    <FiAward className="text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-medium">Curso Concluído</div>
                    <div className="text-sm text-gray-600">Fundamentos de UI/UX Design</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <FiTrendingUp className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">15 Dias de Sequência</div>
                    <div className="text-sm text-gray-600">Continue assim!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;