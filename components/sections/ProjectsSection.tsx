'use client';

import { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../common/ProjectCard';
import ModalLayout from '../modals/ModalLayout';
import ProjectDetailModal from '../modals/ProjectDetailModal';
import { projects } from '@/data/projects';
import type { Project } from '@/types';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
      <div className="mx-auto flex w-225 flex-col gap-11">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            {...project}
            onMoreClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ModalLayout onClose={() => setSelectedProject(null)}>
          <ProjectDetailModal project={selectedProject} />
        </ModalLayout>
      )}
    </section>
  );
}
