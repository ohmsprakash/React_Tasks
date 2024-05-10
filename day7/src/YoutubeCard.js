import React from 'react'

function YoutubeCard({image,heading,alt,views,days}) {
  return (
    <div>
    <img src={image} alt={alt}/>
    <h4>{heading}</h4>
    <div>
        <spam>{views}</spam><spam>{days}</spam>
    </div>
    </div>
    
  )
}

export default YoutubeCard