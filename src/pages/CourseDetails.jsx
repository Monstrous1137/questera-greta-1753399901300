import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiStar, FiClock, FiBook, FiUser, FiAward, FiPlayCircle } from 'react-icons/fi';
import CourseContent from '../components/courses/CourseContent';
import CourseReviews from '../components/courses/CourseReviews';
import InstructorBio from '../components/courses/InstructorBio';
import ProgressTracker from '../components/courses/ProgressTracker';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [activeTab, setActiveTab] = useState('content');

  useEffect(() => {
    // Simulated course data fetch
    const courseData = {
      id: 1,
      title: "Complete Web Development Bootcamp 2024",
      instructor: {
        name: "John Doe",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
        bio: "Senior Web Developer with 10+ years of experience. Previously worked at Google and Amazon.",
        expertise: ["Web Development", "JavaScript", "React", "Node.js"],
        totalStudents: 150000,
        courses: 12,
        rating: 4.8
      },
      rating: 4.8,
      reviews: 1234,
      students: 50000,
      lastUpdated: "February 2024",
      language: "English",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3",
      category: "Web Development",
      level: "Beginner",
      duration: "48 hours",
      lectures: 164,
      description: "Master web development from scratch. Learn HTML, CSS, JavaScript, React, Node.js, and more. Build real-world projects and get hands-on experience.",
      requirements: [
        "Basic computer knowledge",
        "No prior programming experience needed",
        "A computer with internet connection"
      ],
      whatYouWillLearn: [
        "Build 16 real-world web development projects",
        "Master frontend development with React",
        "Learn backend development with Node.js",
        "Understand database management with MongoDB",
        "Deploy your applications to the cloud"
      ],
      progress: 35 // Simulated progress percentage
    };
    
    setCourse(courseData);
  }, [id]);

  if (!course) return null;

  const tabs = [
    { id: 'content', label: 'Course Content' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'instructor', label: 'Instructor' }
  ];

  return (
    <div className="pt-16">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {course.title}
              </h1>
              <p className="text-gray-200 mb-6">{course.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-white mb-6">
                <span className="flex items-center">
                  <FiStar className="mr-1" /> {course.rating} ({course.reviews} reviews)
                </span>
                <span className="flex items-center">
                  <FiUser className="mr-1" /> {course.students.toLocaleString()} students
                </span>
                <span className="flex items-center">
                  <FiClock className="mr-1" /> {course.duration}
                </span>
                <span className="flex items-center">
                  <FiBook className="mr-1" /> {course.lectures} lectures
                </span>
              </div>
              <div className="flex items-center text-white">
                <img
                  src={course.instructor.image}
                  alt={course.instructor.name}
                  className="w-10 h-10 rounded-full mr-2"
                />
                <span>Created by {course.instructor.name}</span>
              </div>
            </motion.div>
            
            {/* Course Preview Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl font-bold">${course.price}</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300 mb-4">
                  Enroll Now
                </button>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FiClock className="mr-2" />
                    <span>Full lifetime access</span>
                  </div>
                  <div className="flex items-center">
                    <FiAward className="mr-2" />
                    <span>Certificate of completion</span>
                  </div>
                  <ProgressTracker progress={course.progress} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  pb-4 px-1 border-b-2 font-medium text-sm
                  ${activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mb-8">
          {activeTab === 'content' && <CourseContent course={course} />}
          {activeTab === 'reviews' && <CourseReviews course={course} />}
          {activeTab === 'instructor' && <InstructorBio instructor={course.instructor} />}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;