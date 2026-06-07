import AnimateOnView from '@/components/common/AnimateOnView';
import ExperienceSection from '@/components/sections/ExperienceSection';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AnimateOnView>
        <SkillsSection />
      </AnimateOnView>
      <AnimateOnView>
        <ProjectsSection />
      </AnimateOnView>
      <AnimateOnView>
        <ExperienceSection />
      </AnimateOnView>
    </>
  );
}
