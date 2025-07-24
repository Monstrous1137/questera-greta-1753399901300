import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiStar, FiFilter } from 'react-icons/fi';
import CourseCard from '../components/courses/CourseCard';
import FilterSidebar from '../components/courses/FilterSidebar';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    level: 'all',
    price: 'all',
    rating: 'all',
    language: 'all'
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Simulated course data
    const courseData = [
      {
        id: 1,
        title: "Complete Web Development Bootcamp 2024",
        instructor: "John Doe",
        rating: 4.8,
        reviews: 1234,
        price: 89.99,
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3",
        category: "Web Development",
        level: "Beginner",
        language: "English",
        isBestseller: true
      },
      {
        id: 2,
        title: "Advanced AI & Machine Learning",
        instructor: "Sarah Smith",
        rating: 4.9,
        reviews: 856,
        price: 129.99,
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3",
        category: "AI & Machine Learning",
        level: "Advanced",
        language: "English",
        isTrending: true
      },
      {
        id: 3,
        title: "Digital Marketing Masterclass",
        instructor: "Mike Johnson",
        rating: 4.7,
        reviews: 2156,
        price: 79.99,
        image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3",
        category: "Digital Marketing",
        level: "Intermediate",
        language: "English",
        isBestseller: true
      },
      {
        id: 4,
        title: "Python for Data Science",
        instructor: "Emily Chen",
        rating: 4.8,
        reviews: 1567,
        price: 94.99,
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3",
        category: "Data Science",
        level: "Intermediate",
        language: "English",
        isTrending: true
      },
      {
        id: 5,
        title: "UI/UX Design Fundamentals",
        instructor: "Alex Turner",
        rating: 4.9,
        reviews: 987,
        price: 69.99,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3",
        category: "Design",
        level: "Beginner",
        language: "English",
        isBestseller: true
      },
      {
        id: 6,
        title: "Mobile App Development with React Native",
        instructor: "David Lee",
        rating: 4.7,
        reviews: 756,
        price: 99.99,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3",
        category: "Mobile Development",
        level: "Intermediate",
        language: "English",
        isTrending: true
      },
      {
        id: 7,
        title: "Advanced JavaScript Concepts",
        instructor: "Rachel Green",
        rating: 4.8,
        reviews: 1232,
        price: 84.99,
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3",
        category: "Web Development",
        level: "Advanced",
        language: "English",
        isBestseller: true
      },
      {
        id: 8,
        title: "Blockchain Development Fundamentals",
        instructor: "Michael Wilson",
        rating: 4.6,
        reviews: 645,
        price: 119.99,
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3",
        category: "Blockchain",
        level: "Beginner",
        language: "English",
        isTrending: true
      },
      {
        id: 9,
        title: "Content Marketing Strategy",
        instructor: "Lisa Thompson",
        rating: 4.7,
        reviews: 892,
        price: 59.99,
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3",
        category: "Digital Marketing",
        level: "Intermediate",
        language: "English",
        isBestseller: true
      },
      {
        id: 10,
        title: "Cloud Computing with AWS",
        instructor: "James Wilson",
        rating: 4.8,
        reviews: 1123,
        price: 109.99,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3",
        category: "Cloud Computing",
        level: "Advanced",
        language: "English",
        isTrending: true
      },
      {
        id: 11,
        title: "Adobe Photoshop Masterclass",
        instructor: "Sophie Martinez",
        rating: 4.9,
        reviews: 2341,
        price: 74.99,
        image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3",
        category: "Design",
        level: "Beginner",
        language: "English",
        isBestseller: true
      },
      {
        id: 12,
        title: "DevOps Engineering",
        instructor: "Robert Kim",
        rating: 4.7,
        reviews: 876,
        price: 129.99,
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3",
        category: "DevOps",
        level: "Advanced",
        language: "English",
        isTrending: true
      },
      {
        id: 13,
        title: "Social Media Marketing",
        instructor: "Emma Davis",
        rating: 4.6,
        reviews: 1543,
        price: 69.99,
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3",
        category: "Digital Marketing",
        level: "Beginner",
        language: "English",
        isBestseller: true
      },
      {
        id: 14,
        title: "Unity Game Development",
        instructor: "Tom Harris",
        rating: 4.8,
        reviews: 934,
        price: 89.99,
        image: "https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-4.0.3",
        category: "Game Development",
        level: "Intermediate",
        language: "English",
        isTrending: true
      },
      {
        id: 15,
        title: "Data Analysis with Excel",
        instructor: "Linda Chen",
        rating: 4.7,
        reviews: 1876,
        price: 59.99,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
        category: "Data Science",
        level: "Beginner",
        language: "English",
        isBestseller: true
      },
      {
        id: 16,
        title: "Cyber Security Fundamentals",
        instructor: "Mark Anderson",
        rating: 4.9,
        reviews: 2156,
        price: 119.99,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3",
        category: "Cyber Security",
        level: "Intermediate",
        language: "English",
        isTrending: true
      },
      {
        id: 17,
        title: "Project Management Professional",
        instructor: "Diana Wu",
        rating: 4.8,
        reviews: 1654,
        price: 99.99,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3",
        category: "Business",
        level: "Advanced",
        language: "English",
        isBestseller: true
      },
      {
        id: 18,
        title: "Video Editing with Premier Pro",
        instructor: "Chris Anderson",
        rating: 4.7,
        reviews: 987,
        price: 79.99,
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3",
        category: "Design",
        level: "Intermediate",
        language: "English",
        isTrending: true
      }
    ];

    setCourses(courseData);
    setFilteredCourses(courseData);
  }, []);

  const applyFilters = (newFilters) => {
    setFilters(newFilters);
    let filtered = [...courses];

    if (newFilters.search) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(newFilters.search.toLowerCase())
      );
    }

    if (newFilters.category !== 'all') {
      filtered = filtered.filter(course =>
        course.category === newFilters.category
      );
    }

    if (newFilters.level !== 'all') {
      filtered = filtered.filter(course =>
        course.level === newFilters.level
      );
    }

    if (newFilters.price !== 'all') {
      if (newFilters.price === 'free') {
        filtered = filtered.filter(course =>
          course.price === 0
        );
      } else if (newFilters.price === 'paid') {
        filtered = filtered.filter(course =>
          course.price > 0
        );
      }
    }

    if (newFilters.rating !== 'all') {
      filtered = filtered.filter(course =>
        course.rating >= parseInt(newFilters.rating)
      );
    }

    if (newFilters.language !== 'all') {
      filtered = filtered.filter(course =>
        course.language === newFilters.language
      );
    }

    setFilteredCourses(filtered);
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Explore Courses</h1>
          <div className="flex items-center bg-white rounded-lg p-2 max-w-2xl">
            <FiSearch className="text-gray-400 ml-2" size={24} />
            <input
              type="text"
              placeholder="Search courses..."
              className="flex-1 p-2 outline-none text-gray-800"
              value={filters.search}
              onChange={(e) => applyFilters({ ...filters, search: e.target.value })}
            />
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden bg-blue-600 text-white p-2 rounded-md"
            >
              <FiFilter size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <FilterSidebar
            filters={filters}
            onFilterChange={applyFilters}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />

          {/* Course Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CourseCard course={course} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;