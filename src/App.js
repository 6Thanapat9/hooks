import { useState } from "react";
import "./App.css";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [product1, setProduct1] = useState(15900);
  const [product2, setProduct2] = useState(17600);
  const [product3, setProduct3] = useState(18900);

  return (
    <div className="App">
      <div>
        <h3>จำนวนสินค้าในตะกร้า {totalItems}</h3>
        <h3>ราคาสินค้าในตะกร้าทั้งหมด {totalPrice} บาท</h3>
      </div>

      <div>
        <img src="gundum01.jpg" alt="cace" width="15%" /><br />
        MB ZGMF-X10A FREEDOM GUNDAM CONCEPT 2 ราคา {product1} บาท
      </div>
      <button onClick={()=>{
        setTotalItems(totalItems + 1)
        setTotalPrice(totalPrice + product1);
        }}>เพิ่มเข้าตะกร้า</button>
      <button onClick={()=>{
        if (totalItems > 0) {
          setTotalItems(totalItems - 1)
          setTotalPrice(totalPrice - product1);}
        }}>นำออกจากตะกร้า</button>

      <div>
        <br />
        <img src="gundum02.jpg" alt="cace" width="15%" /><br />
        RED FRAME KAI ALTERNATIVE STRIKE VER ราคา {product2} บาท
      </div>
      <button onClick={()=>{
        setTotalItems(totalItems + 1)
        setTotalPrice(totalPrice + product2);
        }}>เพิ่มเข้าตะกร้า</button>
      <button onClick={()=>{
        if (totalItems > 0) {
          setTotalItems(totalItems - 1)
          setTotalPrice(totalPrice - product2);}
        }}>นำออกจากตะกร้า</button>

      <div>
        <br />
        <img src="6z.jpg" alt="cace" width="15%" /><br />
        METAL BUILD GUNDAM ASTRAY RED DRAGONICS ราคา {product3} บาท
      </div>
      <button onClick={()=>{
        setTotalItems(totalItems + 1)
        setTotalPrice(totalPrice + product3);
        }}>เพิ่มเข้าตะกร้า</button>
      <button onClick={()=>{
        if (totalItems > 0) {
          setTotalItems(totalItems - 1)
          setTotalPrice(totalPrice - product3);}
        }}>นำออกจากตะกร้า</button>
    </div>
  );
}

export default App;
