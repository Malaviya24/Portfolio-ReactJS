import styles from './ProjectsStyles.module.css';
import swasthik from '../../assets/Swasthik.png';
import zeroTrace from '../../assets/zero-trace.png';
import whocalled from '../../assets/whocalled.png';
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
          src={zeroTrace}
          link="https://kpgu.in"
          h3="Zero-Trace"
          p="Secure Chat App"
        />
        <ProjectCard
          src={whocalled}
          link="https://idkwhoami.in"
          h3="WhoCalled"
          p="Num to Info"
        />
      </div>
    </section>
  );
}

export default Projects;
