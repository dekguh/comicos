import Footer from "../../organism/Footer";
import Navbar from "../../organism/Navbar";

const Layout = ({ children }) => {
    return(
        <>
            <Navbar />
                {children}
            <Footer classes='mt-8' />
        </>
    );
}

export default Layout;