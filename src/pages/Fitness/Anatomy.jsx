import React,{ useState } from 'react'
import AnatomyBack from '../../components/AnatomyBack'
import AnatomyFront from '../../components/AnatomyFront'

export default function Anatomy() {
    const [isFrontView, setIsFrontView] = useState(true)
    const rotate = () =>{
        setIsFrontView(!isFrontView)
    }
    return (
        <div>
           {isFrontView ? <AnatomyFront/> : <AnatomyBack/>
        }
        <button className="btn" onClick={rotate}>Rotate</button>
        </div>
        
    )
}