import { useState, useRef } from 'react'
import './App.css'

function App() {
  const logoRef = useRef();
 const [theme, setTheme] = useState("light");
  const [quantity, setQuantity] = useState(10)
  const [total,setTotal] = useState(0)



  const toggleTheme = ()=>{
    theme === "light" ? setTheme('dark') : setTheme('light')
    logoRef.current.classList.remove("logo")
    setTimeout(()=>{
    logoRef.current.classList.add("logo")
    },2000);
    console.log(logoRef.current)
  }

  const changeQuant =(dir)=>{
    switch(dir){

      case "plus":
        setQuantity(quantity+1)
        break;

        case "minus":
          if(quantity === 0) return;
        setQuantity(quantity-1)
        break;

      default:
        console.log("unknown action!")
    }
  }

  return (
    <div data-theme={theme} className="app">
      <header className="header">
        <h1>React.<span className="secondary">JS</span> <span className="dollar-logo">$</span>tripe Store</h1>
        <div className="toggle-div">
          <h4 ref={logoRef} className={theme == "light" ? "logo" : "dark"} onClick={toggleTheme}>{theme == "light" ? "☀️" : "🌙"}</h4>
        </div>
      </header>

      <div className="item-card">
        <img className="bookimg" src="book_img.webp" alt="" />
        <div className="info-row">
          <h5 className={quantity > 0 ? "quantity" : "line-thru"}>Quantity:{quantity  > 0 ? quantity : "Sold Out! :("}</h5>
          <h5>Price:$14.99</h5>
          <div className="btn-row">
            <button onClick={()=>changeQuant('plus')}className="btn add">+</button>
            <button onClick={()=>changeQuant('minus')} className="btn minus">-</button>
          </div>
        </div>
        <h3 className='tot-h3'>Total: <span className="total">${total}</span></h3>

      </div>

      <footer>
        <strong>Footer&copy;</strong>
      </footer>
    </div>
  )
}

export default App
