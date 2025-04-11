import Image from 'next/image';
import logo from '../../public/liga.png';

export default function Home() {
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center">
      <Image src={logo} alt="Logo da Associação Zendokan de Karate" width={200} height={200} />
      <h1 className="text-white text-4xl font-bold mt-8">Associação Zendokan de Karate</h1>
      <p className="text-gray-400 text-lg mt-4">Estamos em construção!</p>
    </div>
  );
}