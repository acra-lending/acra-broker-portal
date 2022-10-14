import SideBar from "./components/SideBar"
export default function Home() {
  return (
    <div className="bg-slate-50 h-screen">
      <SideBar />
    </div>
  )
}
export function getServerSideProps(context) {
  return {
      props: { message: "Welcome to the About Page" },
  };
}