import { Projects } from './_components/home/projects';
import { Introduction } from './_components/home/introduction';
import { Contact } from './_components/home/contact';
import { Testimonials } from './_components/home/testimonials';
import { Separator } from '@/components/ui/separator';

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10 pb-20 sm:px-16 sm:pb-24">
      <div id="about" className='pt-12 sm:pt-24'>
        <Introduction />
      </div>
      <Separator className='mt-16' />
      <div id="projects">
        <Projects />
      </div>
      <Separator className='mt-16' />
      <div>
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}

export default Home;