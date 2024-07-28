import React from 'react';
import { useLocation } from 'react-router-dom';
import './ResumePreview.css';

const ResumePreview = () => {
  const location = useLocation();
  const { profileData, resumeData } = location.state;

  return (
    <div className="resume-preview-container">
      <div className="resume-header">
        <h1>Resume Preview</h1>
      </div>

      <div className="section">
        <h2>Profile Information</h2>
        <p><strong>Name:</strong> {profileData?.name || 'Mary'}</p>
        <p><strong>Phone:</strong> {profileData?.phone || '1234567890'}</p>
        <p><strong>Address:</strong> {profileData?.address || 'Riddley nagar'}</p>
        <p><strong>City:</strong> {profileData?.city || 'Bangalore'}</p>
        <p><strong>State:</strong> {profileData?.state || 'Karnataka'}</p>
      </div>

      <div className="section">
        <h2>Education</h2>
        <p><strong>University Name:</strong> {resumeData.education.universityName || 'N/A'}</p>
        <p><strong>University Year:</strong> {resumeData.education.universityYear || 'N/A'}</p>
        <p><strong>University Percentage:</strong> {resumeData.education.universityPercentage || 'N/A'}</p>
        <p><strong>Intermediate Name:</strong> {resumeData.education.intermediateName || 'N/A'}</p>
        <p><strong>Intermediate Year:</strong> {resumeData.education.intermediateYear || 'N/A'}</p>
        <p><strong>Intermediate Percentage:</strong> {resumeData.education.intermediatePercentage || 'N/A'}</p>
        <p><strong>SSC Name:</strong> {resumeData.education.sscName || 'N/A'}</p>
        <p><strong>SSC Year:</strong> {resumeData.education.sscYear || 'N/A'}</p>
        <p><strong>SSC Percentage:</strong> {resumeData.education.sscPercentage || 'N/A'}</p>
      </div>

      <div className="section">
        <h2>Projects/Internships</h2>
        {resumeData.projects.map((project, index) => (
          <p key={index}><strong>Project Name:</strong> {project.projectName || 'N/A'}</p>
        ))}
      </div>

      <div className="section">
        <h2>Areas of Interest</h2>
        {resumeData.areasOfInterest.map((interest, index) => (
          <p key={index}><strong>Interest:</strong> {interest.interest || 'N/A'}</p>
        ))}
      </div>

      <div className="section">
        <h2>Technical Skills</h2>
        {resumeData.technicalSkills.map((skill, index) => (
          <p key={index}><strong>Skill Name:</strong> {skill.skillName || 'N/A'}</p>
        ))}
      </div>

      <div className="section">
        <h2>Academic Achievements</h2>
        {resumeData.academicAchievements.map((achievement, index) => (
          <p key={index}><strong>Achievement:</strong> {achievement.achievement || 'N/A'}</p>
        ))}
      </div>

      <div className="section">
        <h2>Extracurricular Activities</h2>
        {resumeData.extracurricularActivities.map((activity, index) => (
          <p key={index}><strong>Activity:</strong> {activity.activity || 'N/A'}</p>
        ))}
      </div>

      <button type="button" className="export-button">Export as PDF</button>
    </div>
  );
};

export default ResumePreview;
