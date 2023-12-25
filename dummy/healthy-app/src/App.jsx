import Item from "./Item";

const App = () => {
  const foodList=['banana','mango','bread','roti']
  return (
    <>
 <Item foodList={foodList}/>
    </>
  );
};

export default App;
