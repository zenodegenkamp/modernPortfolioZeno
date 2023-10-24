import Spline from '@splinetool/react-spline';

export default function Header(props){

    return (
       <header className="flex items-center justify-between p-6 fixed w-full top-0 right-0">
        <a className="lg:text-2xl md:text-xl sm:text-lg text-md" href="/"> ZENO DEGENKAMP </a>
        <a onClick={props.onClick} className="lg:text-2xl" >{props.darkMode ? "LIGHTMODE" : "DARKMODE"}</a>
       </header>
    )
}


// bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60