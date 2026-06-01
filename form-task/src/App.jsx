import "./App.css";
import { useState } from "react";

function App() {
  const [product, setProduct] = useState({
    prodName: "",
    price: "",
    description: "",
  });

  //array
  let [productList, setproductList] = useState([]);

  let submitHandle = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // update existing product
      let updatedList = [...productList];
      updatedList[editIndex] = product;
      setproductList(updatedList);
      setEditIndex(null);
    } else {
      // add new product
      setproductList([...productList, product]);
    }
    setProduct({
      prodName: "",
      price: "",
      description: "",
    });
  };

  // update
  let [editIndex, setEditIndex] = useState(null);
  let editProduct = (index) => {
    setProduct(productList[index]); 
    setEditIndex(index); 
  };

  // delete
  let deleteProduct = (index) => {
    let updatedList = productList.filter((ele, i) => i !== index);
    setproductList(updatedList);
  };

  return (
    <div className="wrapper">
      <form action="" onSubmit={submitHandle}>
        <h2>Product Details</h2> <br />
        <label htmlFor="Prodname">Product Name</label>
        <br />
        <input
          type="text"
          placeholder="e.g.Pencil"
          value={product.prodName}
          onChange={(e) => setProduct({ ...product, prodName: e.target.value })}
        />
        <br />
        <label htmlFor="Price">Price</label>
        <br />
        <input
          type="number"
          placeholder="e.g.100"
          value={product.price}
          onChange={(e) =>
            setProduct({ ...product, price: Number(e.target.value) })
          }
        />
        <br />
        <label htmlFor="desc">Product Description</label>
        <br />
        <input
          type="text"
          placeholder="Product Description"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Table */}
      <table>
        <thead>
          <tr>
          <th>S.No</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {productList.map((prod, idx) => (
            <tr key={idx}>
            <td>{idx + 1}</td>
              <td>{prod.prodName}</td>
              <td>{prod.price}</td>
              <td>{prod.description}</td>
              <td>
                <button id="updateBtn" onClick={() => editProduct(idx)}>
                  Update
                </button>
                <button id="deleteBtn" onClick={() => deleteProduct(idx)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
