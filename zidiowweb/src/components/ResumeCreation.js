import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResumeCreation.css';

const ResumeCreation = () => {
  const navigate = useNavigate();
  const profileData = JSON.parse(localStorage.getItem('profileData'));

  const [education, setEducation] = useState({
    universityName: '',
    universityYear: '',
    universityPercentage: '',
    intermediateName: '',
    intermediateYear: '',
    intermediatePercentage: '',
    sscName: '',
    sscYear: '',
    sscPercentage: '',
  });

  const [projects, setProjects] = useState([{ id: Date.now(), projectName: '' }]);
  const [areasOfInterest, setAreasOfInterest] = useState([{ id: Date.now(), interest: '' }]);
  const [technicalSkills, setTechnicalSkills] = useState([{ id: Date.now(), skillName: '' }]);
  const [academicAchievements, setAcademicAchievements] = useState([{ id: Date.now(), achievement: '' }]);
  const [extracurricularActivities, setExtracurricularActivities] = useState([{ id: Date.now(), activity: '' }]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };

  const handleProjectChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProjects = projects.map((project, i) =>
      i === index ? { ...project, [name]: value } : project
    );
    setProjects(updatedProjects);
  };

  const addProject = () => {
    setProjects([...projects, { id: Date.now(), projectName: '' }]);
  };

  const handleInterestChange = (index, e) => {
    const { name, value } = e.target;
    const updatedInterests = areasOfInterest.map((interest, i) =>
      i === index ? { ...interest, [name]: value } : interest
    );
    setAreasOfInterest(updatedInterests);
  };

  const addInterest = () => {
    setAreasOfInterest([...areasOfInterest, { id: Date.now(), interest: '' }]);
  };

  const handleSkillChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSkills = technicalSkills.map((skill, i) =>
      i === index ? { ...skill, [name]: value } : skill
    );
    setTechnicalSkills(updatedSkills);
  };

  const addSkill = () => {
    setTechnicalSkills([...technicalSkills, { id: Date.now(), skillName: '' }]);
  };

  const handleAchievementChange = (index, e) => {
    const { name, value } = e.target;
    const updatedAchievements = academicAchievements.map((achievement, i) =>
      i === index ? { ...achievement, [name]: value } : achievement
    );
    setAcademicAchievements(updatedAchievements);
  };

  const addAchievement = () => {
    setAcademicAchievements([...academicAchievements, { id: Date.now(), achievement: '' }]);
  };

  const handleActivityChange = (index, e) => {
    const { name, value } = e.target;
    const updatedActivities = extracurricularActivities.map((activity, i) =>
      i === index ? { ...activity, [name]: value } : activity
    );
    setExtracurricularActivities(updatedActivities);
  };

  const addActivity = () => {
    setExtracurricularActivities([...extracurricularActivities, { id: Date.now(), activity: '' }]);
  };

  const handleSave = () => {
    const resumeData = {
      education,
      projects,
      areasOfInterest,
      technicalSkills,
      academicAchievements,
      extracurricularActivities,
    };
    console.log('Resume information saved:', resumeData);
    navigate('/resume-preview', { state: { profileData, resumeData } });
  };

  return (
    <div className="resume-creation-container">
      <div className="resume-header">
        <h1>Create Your Resume</h1>
      </div>
      <h2>Education</h2>
      <div className="education-section">
        <div className="sub-heading">University</div>
        <div className="grid-container">
          <div className="input-group">
            <label htmlFor="universityName">University Name</label>
            <input
              type="text"
              id="universityName"
              name="universityName"
              value={education.universityName}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="universityYear">Passed Out Year</label>
            <input
              type="text"
              id="universityYear"
              name="universityYear"
              value={education.universityYear}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="universityPercentage">Percentage/CGPA</label>
            <input
              type="text"
              id="universityPercentage"
              name="universityPercentage"
              value={education.universityPercentage}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="sub-heading">Intermediate</div>
        <div className="grid-container">
          <div className="input-group">
            <label htmlFor="intermediateName">School Name</label>
            <input
              type="text"
              id="intermediateName"
              name="intermediateName"
              value={education.intermediateName}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="intermediateYear">Passed Out Year</label>
            <input
              type="text"
              id="intermediateYear"
              name="intermediateYear"
              value={education.intermediateYear}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="intermediatePercentage">Percentage/CGPA</label>
            <input
              type="text"
              id="intermediatePercentage"
              name="intermediatePercentage"
              value={education.intermediatePercentage}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="sub-heading">SSC</div>
        <div className="grid-container">
          <div className="input-group">
            <label htmlFor="sscName">School Name</label>
            <input
              type="text"
              id="sscName"
              name="sscName"
              value={education.sscName}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="sscYear">Passed Out Year</label>
            <input
              type="text"
              id="sscYear"
              name="sscYear"
              value={education.sscYear}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="sscPercentage">Percentage/CGPA</label>
            <input
              type="text"
              id="sscPercentage"
              name="sscPercentage"
              value={education.sscPercentage}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <h2>Projects/Internships</h2>
      <div className="projects-section">
        {projects.map((project, index) => (
          <div key={project.id} className="input-group">
            <label htmlFor={`projectName-${index}`}>Project/Internships  Name</label>
            <input
              type="text"
              id={`projectName-${index}`}
              name="projectName"
              value={project.projectName}
              onChange={(e) => handleProjectChange(index, e)}
            />
          </div>
        ))}
        <button type="button" className="add-button" onClick={addProject}>
          Add
        </button>
      </div>

      <h2>Areas of Interest</h2>
      <div className="areas-of-interest-section">
        {areasOfInterest.map((interest, index) => (
          <div key={interest.id} className="input-group">
            <label htmlFor={`interest-${index}`}>Interest</label>
            <input
              type="text"
              id={`interest-${index}`}
              name="interest"
              value={interest.interest}
              onChange={(e) => handleInterestChange(index, e)}
            />
          </div>
        ))}
        <button type="button" className="add-button" onClick={addInterest}>
          Add
        </button>
      </div>

      <h2>Technical Skills</h2>
      <div className="technical-skills-section">
        {technicalSkills.map((skill, index) => (
          <div key={skill.id} className="input-group">
            <label htmlFor={`skillName-${index}`}>Skill Name</label>
            <input
              type="text"
              id={`skillName-${index}`}
              name="skillName"
              value={skill.skillName}
              onChange={(e) => handleSkillChange(index, e)}
            />
          </div>
        ))}
        <button type="button" className="add-button" onClick={addSkill}>
          Add 
        </button>
      </div>

      <h2>Academic Achievements</h2>
      <div className="academic-achievements-section">
        {academicAchievements.map((achievement, index) => (
          <div key={achievement.id} className="input-group">
            <label htmlFor={`achievement-${index}`}>Achievement</label>
            <input
              type="text"
              id={`achievement-${index}`}
              name="achievement"
              value={achievement.achievement}
              onChange={(e) => handleAchievementChange(index, e)}
            />
          </div>
        ))}
        <button type="button" className="add-button" onClick={addAchievement}>
          Add 
        </button>
      </div>

      <h2>Extracurricular Activities</h2>
      <div className="extracurricular-activities-section">
        {extracurricularActivities.map((activity, index) => (
          <div key={activity.id} className="input-group">
            <label htmlFor={`activity-${index}`}>Activity</label>
            <input
              type="text"
              id={`activity-${index}`}
              name="activity"
              value={activity.activity}
              onChange={(e) => handleActivityChange(index, e)}
            />
          </div>
        ))}
        <button type="button" className="add-button" onClick={addActivity}>
          Add 
        </button>
      </div>

      <button type="button" className="save-button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default ResumeCreation;
