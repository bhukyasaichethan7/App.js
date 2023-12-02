import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CourseListingPage = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch courses from your API or backend (dummy API or Firebase)
    // Update the courses state with the fetched data
  }, []);

  const filteredCourses = courses.filter(course =>
    course.web development.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.saichethan.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Course name(Web development)"
        placeholder="instructor name(saichethan)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredCourses.map(course => (
          <li key={course.id}>
            <Link to={`/course/${course.id}`}>{course.web development} - {course.saichethan}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseListingPage;
