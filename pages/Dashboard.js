import DashLinks from "./components/DashLinks";

function dashboard () {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-3 pt-4 mx-auto my-0 text-center">
            <DashLinks />
        </div>
    )
}

export default dashboard;