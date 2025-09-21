import styles from './ProjectsStyles.module.css';
import swasthik from '../../assets/Swasthik.png';
import chattrix from '../../assets/Chatterix.png';
import rewindPro from '../../assets/Rewindpro.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={swasthik}
          link="https://swasthik-ai.vercel.app/"
          h3="Swasthik"
          p="AI Health Assistant"
        />
        <ProjectCard
          src={chattrix}
          link="https://chattrix-69.vercel.app/"
          h3="Chattrix"
          p="Secure Chat App"
        />
        <ProjectCard
          src={rewindPro}
          link="https://universal-electric-motor-rewinding.vercel.app/"
          h3="RewindPro"
          p="Shop Management System"
        />
      </div>
    </section>
  );
}

export default Projects;
