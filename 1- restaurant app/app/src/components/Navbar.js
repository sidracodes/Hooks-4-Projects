const Navbar = ({uniqueData ,filterItems}) => {
  return (
    <>
     <nav className="navbar">
        <div className="btn-group">
    {
      uniqueData.map((currentElement)=>{
        
return(
  <>
  <button className="btn-group__item" onClick={()=>filterItems(currentElement)}>{currentElement}</button>
  </>
)
      })
    }
      
      </div>
      </nav>
  
    </>
  )
}

export default Navbar
