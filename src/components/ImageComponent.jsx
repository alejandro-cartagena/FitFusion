import React, { useState, useEffect } from 'react'
import { Blurhash } from "react-blurhash";

export default function ImageComponent({ src, blurHash }) {
    const[imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
        }
        img.src = src
    }, [src])


    return (
        <>
            <div style={{display: imageLoaded ? 'none' : 'inline'}}>
                <Blurhash
                    hash={blurHash}
                    width={411}
                    height={274}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                /> 
            </div>
            
            {imageLoaded && (
                <img 
                    className='plans-blur-img' 
                    src={src} alt="" 
                    srcset="" 
                    style={{display: !imageLoaded ? 'none' : 'inline'}}/>
            )}
            
        </>
    )
}