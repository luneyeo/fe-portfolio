import AnimateOnView from '@/components/common/AnimateOnView';
import ExperienceSection from '@/components/sections/ExperienceSection';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="relative z-10 flex flex-col gap-27 rounded-t-4xl bg-white pt-20 pb-30 shadow-[0_8px_40px_rgba(0,0,0,0.6)] md:gap-40 md:pt-30 lg:pt-40">
        <AnimateOnView>
          <SkillsSection />
        </AnimateOnView>
        <AnimateOnView>
          <ProjectsSection />
        </AnimateOnView>
        <AnimateOnView>
          <ExperienceSection />
        </AnimateOnView>
      </div>
    </>
  );
}
