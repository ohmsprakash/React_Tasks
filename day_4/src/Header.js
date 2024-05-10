function Header(){
    return(
        <div style={{
            display:"flex",
            marginBottom: "30px",
          }}>
              <img style={{
                 borderRadius: "50%",
              }}
              src="https://yt3.googleusercontent.com/OoVuuL6C86aY1WQVxMouogyZcvhsMty_0C9k1KTQi303O-SlyivduPeozs9SvApxj6nwjq9EpA=s176-c-k-c0x00ffffff-no-rj" alt="Ashok it"></img>
        <div>
            <h1>Ashok IT</h1>
            <ul>
                <li>@ashokit</li>
                <li>79.7K subscribers</li>
                <li>1.1K videos</li>
            <button style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "20px",
                cursor : "pointer",
                marginTop : "15px",
            }}>Subscribe</button>
            </ul>
        </div>
        </div>
    )
}
export default Header;