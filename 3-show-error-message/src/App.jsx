// import Item from "./Item";
import Error  from "./Error";

const App = () => {
  const foodList=[]
  // const foodList=['banana','mango','bread','roti']

  return (
    <>
 {/* <Item foodList={foodList}/> */}
 <Error foodList={foodList}/>
    </>
  );
};

export default App;
