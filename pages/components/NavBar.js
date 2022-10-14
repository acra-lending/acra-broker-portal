import AcraLogo from '../../public/AcraLogo.png';
import Image from 'next/image';
export default function NavBar() {
  return (
    <div className="mx-auto mb-1">
      <nav className="font-sans sm:flex hidden items-center justify-between text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow w-full">
        <div className="mb-2 sm:mb-0">
        <Image
                src={AcraLogo}
                height={50}
                width={256}
            />
        </div>
        <div>
          <a
            href="/one"
            className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            Sign Out
          </a>
        </div>
      </nav>
    </div>
  );
}
