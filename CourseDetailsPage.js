import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  // Fetch the detailed information of the selected course based on courseId
  Web development:To develop web development we must need strong skills in web development applications and servers. 

  return (
    <div>
      <h2>Course Details</h2>
      {/* Web Development course covers various topics under Web Development such as Database Management, Web Publishing, Web Design, and Web Programming. Web Development Courses can be of various types, namely Full Stack Web Development, Front End Web Development, Back End Web Development, Web Application, etc. */}
    </div>
  );
};

export default CourseDetailsPage;
