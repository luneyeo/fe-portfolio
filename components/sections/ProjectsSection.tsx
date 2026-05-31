import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../common/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsSection() {
  return (
    <section
      className="mx-auto flex w-280 max-w-280 flex-col gap-16 px-6"
      id="projects"
    >
      <SectionTitle
        title="프로젝트"
        subTitle="PROJECTS"
        descrpition="더보기를 클릭하여 프로젝트 상세를 확인해보세요"
      />
      <div className="flex flex-col gap-11">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
