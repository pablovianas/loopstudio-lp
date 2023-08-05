import { Josefin_Sans } from 'next/font/google'
import heroBackground from '@/images/Hero.jpg'
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Title } from '@/components/Title';
import { josefin } from '@/utils/fonts';

export default function Home() {
  return (
      <main className="w-full h-[650px] relative">
          <Image
              src={heroBackground}
              className="w-full h-full"
              alt="hero background"
          />
          <Header />
          <Title font={josefin}/>
      </main>
  );
}