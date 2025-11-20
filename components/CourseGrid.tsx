export default function CourseGrid() {
  const courses = [
    { title: 'MVP Development', instructor: 'Sarah Okafor', rating: 4.9, students: 1200, price: 'Free' },
    { title: 'Pitch Deck Mastery', instructor: 'David Kenyatta', rating: 4.8, students: 850, price: '$49' },
    { title: 'Market Research in Africa', instructor: 'Amina Hassan', rating: 4.9, students: 950, price: '$39' },
    { title: 'Legal Foundations', instructor: 'Michael Ishoko', rating: 4.7, students: 600, price: '$59' },
    { title: 'Digital Marketing', instructor: 'Grace Mwangi', rating: 4.8, students: 1100, price: '$45' },
    { title: 'Financial Planning', instructor: 'John Adebayo', rating: 4.9, students: 750, price: '$55' }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold gradient-text mb-4 animate-shimmer">Featured Courses</h2>
        <p className="text-xl text-gray-300">Learn from Africa's top entrepreneurs and investors</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="glass border-sleek rounded-2xl p-6 hover-lift shadow-sleek">
            <div className="w-full h-40 bg-gradient-to-r from-primary/20 to-primary/40 rounded-xl mb-6 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">{course.title[0]}</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
            <p className="text-gray-400 mb-4">by {course.instructor}</p>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-primary">★</span>
                <span className="text-white font-medium">{course.rating}</span>
                <span className="text-gray-400">({course.students})</span>
              </div>
              <span className="text-primary font-bold text-lg">{course.price}</span>
            </div>
            
            <button className="w-full bg-primary hover:bg-primary-500 text-black px-4 py-3 rounded-xl font-semibold transition-colors">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}