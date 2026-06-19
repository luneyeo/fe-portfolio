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
      className="mx-auto flex w-auto max-w-280 flex-col gap-10 px-6 md:gap-16"
      id="projects"
    >
      <SectionTitle
        title="프로젝트"
        subTitle="PROJECTS"
        descrpition="카드를 클릭하여 프로젝트 상세를 확인해보세요"
      />
      <div className="flex flex-col gap-11 lg:mx-auto lg:w-225">
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
