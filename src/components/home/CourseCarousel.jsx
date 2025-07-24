import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar, FiClock, FiUser } from 'react-icons/fi';

const CourseCard = ({ course }) => {
  return (
    <div className="flex-shrink-0 w-72 mr-6 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-duration-300">
      <div className="relative">
        <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
        {course.isBestseller && (
          <span className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-medium">
            Bestseller
          </span>
        )}
        {course.isTrending && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Trending
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-600">{course.category}</span>
          <span className="text-sm text-gray-500">{course.level}</span>
        </div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{course.title}</h3>
        <div className="flex items-center mb-2 text-sm text-gray-600">
          <FiUser className="mr-1" />
          <span>{course.instructor}</span>
        </div>
        <div className="flex items-center mb-2">
          <div className="flex items-center text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} className={i < Math.floor(course.rating) ? "fill-current" : ""} />
            ))}
            <span className="ml-1 text-gray-700">{course.rating}</span>
          </div>
          <span className="ml-2 text-sm text-gray-600">({course.reviews.toLocaleString()})</span>
        </div>
        <div className="flex items-center mb-3 text-sm text-gray-600">
          <FiClock className="mr-1" />
          <span>{course.duration}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">
            {course.price === 0 ? 'Free' : `$${course.price}`}
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

const CourseCarousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);

  const courses = [
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
      duration: "52 hours",
      isBestseller: true
    },
    {
      id: 2,
      title: "Master Data Science with Python",
      instructor: "Jane Smith",
      rating: 4.9,
      reviews: 856,
      price: 94.99,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
      category: "Data Science",
      level: "Intermediate",
      duration: "48 hours",
      isTrending: true
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      instructor: "Sarah Wilson",
      rating: 4.7,
      reviews: 2156,
      price: 79.99,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3",
      category: "Design",
      level: "Beginner",
      duration: "35 hours",
      isBestseller: true
    },
    {
      id: 4,
      title: "Advanced Machine Learning Specialization",
      instructor: "Dr. Michael Chen",
      rating: 4.9,
      reviews: 1567,
      price: 129.99,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3",
      category: "AI & ML",
      level: "Advanced",
      duration: "60 hours",
      isTrending: true
    },
    {
      id: 5,
      title: "Digital Marketing Mastery",
      instructor: "Emily Brown",
      rating: 4.6,
      reviews: 3421,
      price: 69.99,
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3",
      category: "Marketing",
      level: "Intermediate",
      duration: "42 hours",
      isBestseller: true
    },
    {
      id: 6,
      title: "Mobile App Development with React Native",
      instructor: "David Lee",
      rating: 4.8,
      reviews: 945,
      price: 99.99,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3",
      category: "Mobile Dev",
      level: "Intermediate",
      duration: "45 hours",
      isTrending: true
    },
    {
      id: 7,
      title: "Cloud Computing with AWS",
      instructor: "Alex Turner",
      rating: 4.7,
      reviews: 1876,
      price: 109.99,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3",
      category: "Cloud Computing",
      level: "Advanced",
      duration: "50 hours",
      isBestseller: true
    },
    {
      id: 8,
      title: "Blockchain Development Fundamentals",
      instructor: "Robert Kim",
      rating: 4.8,
      reviews: 654,
      price: 119.99,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3",
      category: "Blockchain",
      level: "Intermediate",
      duration: "38 hours",
      isTrending: true
    }
  ];

  const scroll = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = 600;

    if (container) {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(maxScroll, scrollPosition + scrollAmount);

      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Top-Rated Courses</h2>
            <p className="text-gray-600">Learn from the best courses chosen by our students</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={scrollPosition === 0}
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-hidden scroll-smooth"
          >
            {courses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCarousel;