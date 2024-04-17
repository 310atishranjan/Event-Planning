
function services() {
    const services=[
        {
        id:1,
        url:"/birthday.jpg",
        title:"Birthday planning"
        },
        {
            id:2,
            url:"/anniversery.png",
            title:"Anniversery planning"
        },
        {
            id:3,
            url:"/wedding.jpg",
            title:"Marriage planning"
        },
    ]
  return (
    <div className="services container">
      <h2>Our Services</h2>
      <div className="banner">
      {
        services.map((element,index)=>{
          return(
            <>
              <div className="item" key={index}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title}/>
              </div>
            </>
          )
        })
      }
      </div>
    </div>
  )
}

export default services