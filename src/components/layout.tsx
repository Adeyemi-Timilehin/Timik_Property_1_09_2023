import Footer from "./footer";
interface Props{
    children:React.ReactNode;
}
const Layout:React.FC<Props>=({children})=>{
    return(
        <>{children}
        <Footer />
        </>
    )
}
export default Layout