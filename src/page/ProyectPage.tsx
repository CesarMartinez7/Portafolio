
// import MockDataProyect from "../Mocks/proyect.json"
import { useParams } from "react-router-dom"

export default function ProyectPage (){
    const {id} = useParams()
    return (
        <div>
            Hello world
            {id}
        </div>
    )
}