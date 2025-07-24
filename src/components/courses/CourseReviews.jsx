import { FiStar, FiThumbsUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

const CourseReviews = ({ course }) => {
  const reviews = [
    {
      id: 1,
      user: {
        name: "Sarah Johnson",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3"
      },
      rating: 5,
      date: "2 weeks ago",
      content: "This course exceeded my expectations. The instructor explains complex concepts in a simple way.",
      helpful: 45
    },
    {
      id: 2,
      user: {
        name: "Michael Chen",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3"
      },
      rating: 4,
      date: "1 month ago",
      content: "Great course structure and content. Could use more practical exercises.",
      helpful: 32
    }
  ];

  const ratingStats = {
    5: 75,
    4: 15,
    3: 7,
    2: 2,
    1: 1
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Overall Rating */}
        <div className="p-6 bg-gray-50 rounded-lg">
          <div className="text-center mb-4">
            <h3 className="text-5xl font-bold text-blue-600 mb-2">{course.rating}</h3>
            <div className="flex justify-center text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className={i < Math.floor(course.rating) ? "fill-current" : ""} />
              ))}
            </div>
            <p className="text-gray-600">Course Rating</p>
          </div>
          
          {/* Rating Breakdown */}
          <div className="space-y-2">
            {Object.entries(ratingStats).reverse().map(([rating, percentage]) => (
              <div key={rating} className="flex items-center">
                <div className="flex items-center w-20">
                  <span className="mr-2">{rating}</span>
                  <FiStar className="text-yellow-400 fill-current" />
                </div>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="ml-2 w-12 text-sm text-gray-600">{percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Review Statistics */}
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Student Feedback</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Total Reviews</span>
              <span className="font-semibold">{course.reviews}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Last Updated</span>
              <span className="font-semibold">{course.lastUpdated}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Language</span>
              <span className="font-semibold">{course.language}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-b pb-6"
          >
            <div className="flex items-start">
              <img
                src={review.user.image}
                alt={review.user.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h4 className="font-semibold mr-2">{review.user.name}</h4>
                  <span className="text-gray-500 text-sm">{review.date}</span>
                </div>
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className={i < review.rating ? "fill-current" : ""} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{review.content}</p>
                <button className="flex items-center text-gray-500 hover:text-blue-600">
                  <FiThumbsUp className="mr-2" />
                  <span>Helpful ({review.helpful})</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CourseReviews;