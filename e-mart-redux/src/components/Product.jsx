import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "./redux/CartSlice";

const Product = () => {
  const dispatch=useDispatch()
  const [product, setProduct] = useState([]);

  let api = 'https://fakestoreapi.com/products';
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((response) => setProduct(response));
  }, []);

  
const addCart=(item)=>{
  // dispatach action
  dispatch(add(item))

}

  return (
    <>
      <h2 className="text-center">Product Dashboard</h2>
      <div className="row">
        {product.map((item, id) => (
          <div className='col-md-3' style={{ marginBottom: '10px' }} key={id}>
            <Card  className="h-100" >
              <div className="text-center">
                <Card.Img variant="top" src={item.image} style={{ width: '100px', height: '130px' }} />
              </div>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="text-center">INR:{item.price}</Card.Text>
              </Card.Body>
              <Card.Footer style={{ backGround: 'white' }}>
                <div className="text-center">
                  <Button variant="primary" className="text-center" onClick={()=>addCart(item)}>Add to cart</Button>
                </div>
              </Card.Footer>
            </Card>
          </div>
        ))
        }
      </div>
    </>
  );
};

export default Product;
