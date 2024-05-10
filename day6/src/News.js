function News({image,heading,paragraph,link,linkName}){
    return(

     <div style={{
            border: "2px solid #000",
            marginBottom: "20px",
            width: "800px",
            padding: "10px",
        }}>
           <img src={image} alt="newsImage"/>
           <h1>{heading}</h1>
           <p>{paragraph}</p>
           <a href={link}>{linkName}</a>
     </div>
    )
}
export default News;