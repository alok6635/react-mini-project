import Container from "./Container";
import FoodInput from "./FoodInput";
import FoodTrans from "./FoodTrans";

const FoodList = () => {

    const foodItems = ['Roti', 'Dal', 'Salad', 'Juice']

    return (
        <>
            <Container>
                <h3>Healthy Food</h3>
                <FoodInput/>
                <FoodTrans foodItems={foodItems} />
            </Container>
        </>
    )
}

export default FoodList;
