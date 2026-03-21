import Navbar from "./Navbar"

export default function Layout({currentItemName, children}){

    return <>
        <Navbar currentItem={currentItemName} />
        {children}
    </>
}