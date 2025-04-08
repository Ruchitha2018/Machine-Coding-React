import { useState, useEffect } from 'react'
import './App.css'

//https://dummyjson.com/products?limit=100

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)

  const fetchData = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=150');
    const data = await res.json();
    console.log('DATA', data)
    setProducts(data.products);
  }

  const productsPerPage = 20;
  const totalPages = Math.ceil(products.length/productsPerPage);
  const indexOfLastItem = currentPage*productsPerPage;
  const indexOfFirstItem = indexOfLastItem - productsPerPage;
  const updatedProducts = products.slice(indexOfFirstItem, indexOfLastItem)

  console.log('DATA', totalPages,  indexOfFirstItem, indexOfLastItem, products.length)



  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <table>
        <tbody>
          {updatedProducts.map((product, index) => (
            <tr><td>{product.title}</td></tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
       { [...Array(totalPages)].map((_, index) => (
        <span onClick={() => setCurrentPage(index+1)} className={`pagination-index ${currentPage === index+1 ? 'active': ''}`}>{index+1}</span>
       ))}
      </div>
    </>


  )
}

export default App
