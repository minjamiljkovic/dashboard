import { Link } from "react-router-dom";

 function Products() {
  return (
    <div> This is Products page <Link to= '/' className = 'underline' >Go to dashboard</Link> </div>
  )
}

export default Products;