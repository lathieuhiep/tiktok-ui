import Header from "../components/Header";
import './DefaultLayout.scss';
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />

            <div className="container">
                <Sidebar />

                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout