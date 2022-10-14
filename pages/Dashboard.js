import DashLinks from "./components/DashLinks";
import SideBar from "./components/SideBar";
function dashboard ({data}) {
    return (
        <div className="md:flex">
            <SideBar />
            <div className="max-h-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-3 pt-4 mx-auto my-0 text-center">
                <DashLinks />
            </div>
        </div>
    )
}
export const getServerSideProps = (context) => {
    return {
        props: { data: "COMING FROM DASHBOARD " },
    };
  }
export default dashboard;