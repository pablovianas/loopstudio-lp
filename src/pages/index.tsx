import { Header } from '@/components/Header';
import { Title } from '@/components/Title';
import { josefin } from '@/utils/fonts';
import { Interactive } from '@/components/Interactive';
import { Creations } from '@/components/Creations';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
      <>
        <main className={`w-full h-[650px] relative bg-[url('../images/Hero.jpg')] bg-cover bg-fixed bg-center`}>
            <Header />
            <Title font={josefin}/>
        </main>
        <Interactive/ >
        <Creations />
        <Footer />
      </>
  );
}
