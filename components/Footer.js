
export default function Footer() {


  return (
    <div>
      <footer className="fixed py-2 px-4 bg-white shadow font-sans border md:flex md:items-center justify-end md:p-6 dark:bg-gray-800 w-full bottom-0 left-0">
          {/* <ul className="flex flex-wrap items-center mt-3 px-8 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="#" className="mr-4 no-underline hover:underline text-gray-500 hover:text-blue-700 md:mr-6 ">About</a>
              </li>
              <li>
                  <a href="#" className="mr-4 no-underline hover:underline text-gray-500 hover:text-blue-700 md:mr-6">Privacy Policy</a>
              </li>
              <li>
                  <a href="#" className="mr-4 no-underline hover:underline text-gray-500 hover:text-blue-700 md:mr-6">Licensing</a>
              </li>
              <li>
                  <a href="#" className="no-underline hover:underline text-gray-500 hover:text-blue-700">Contact</a>
              </li>
          </ul> */}
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 px-8 sm:px-1">© {new Date().getFullYear()} Acra Lending. All Rights Reserved.
          </span>
      </footer>
    </div>
  );
}
