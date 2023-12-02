import { NavBar } from "../navbar/NavBar";


export function Home(){
    return (
        <div className="bg-[#F1F1F1]">
            <NavBar />

            <p>{process.env.BASE_URL}</p>
        </div>
    )
}
