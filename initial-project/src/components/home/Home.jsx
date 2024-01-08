import ShowDeleteText from "../showdelete/ShowDeleteText";
import CounterFtn from "../counters/CounterFtn";
import CounterCls from "../counters/CounterCls";
import DisplayListItem from "../displayLists/DisplayListItem";
import InfiniteCounter from '../counters/InfiniteCounter';
import AdvanceCounter from '../counters/AdvanceCounter';
import CheckboxDeleted from '../checkboxdeleted/CheckboxDeleted';
import CounterStopMoveNextPage from "../counters/CounterStopMoveNextPage";
import FoodList from "../heathyfood/FoodList";

const Home = () => {
    return (
        <>
            <div className="wrapper">
                <h4>counters</h4>
                <div className="counter-container">
                    <div><CounterFtn /></div>
                    <div><CounterCls /></div>
                    <div><AdvanceCounter /></div>
                    <div><InfiniteCounter /></div>
                    <div><CounterStopMoveNextPage /></div>
                </div>
                <h4>Show & Delete  component </h4>
                <div className="showDel"><ShowDeleteText /></div>
                <h4>Display list item and delete items</h4>
                <div className="DisplayList"><DisplayListItem /></div>
                <h4> Checkbox Deleted </h4>
                <div className='showDel'><CheckboxDeleted /></div>
                <h4>Healthy App</h4>
                <div className="healthy"><FoodList/></div>
                <div></div>
            </div>
        </>
    )
}

export default Home;