import logo from '../../public/logo.ico'
console.log(logo);
export default function NavBar() {
  return (
    <div className="mx-auto mb-1">
      <nav className="font-sans flex items-center justify-between text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <a
            href="/"
            className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
          >
            Acra Lending
          </a>
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
