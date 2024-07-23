import NavBar from "../Componentes/NavBar/NavBar";
import Footer from "../Componentes/Footer/Footer"

export default function Home (){
    return (
        <>
            <div style={{height: 76+'px'}}><NavBar/></div>
            <div style={{height: 250+'px'}}><Footer/></div>
        </>
    )
}