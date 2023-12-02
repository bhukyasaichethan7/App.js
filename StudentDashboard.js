import React, { useState, useEffect } from 'react';

const StudentDashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    // Fetch enrolled courses for the student

    web development course. 
    // Update the enrolledCourses state with the fetched data
      web development enrolled course. 
  }, []);

  return (
    <div>
      <h2>Enrolled Courses</h2>
      <ul>
        {enrolledCourses.map(course => (
          <li key={course.id}>
            {course.web development} - {course.saichethan}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
