import ShowDeleteText from "../showdelete/ShowDeleteText";
import CounterFtn from "../counters/CounterFtn";
import CounterCls from "../counters/CounterCls";
import DisplayListItem from "../displayLists/DisplayListItem";
import InfiniteCounter from '../counters/InfiniteCounter';
import AdvanceCounter from '../counters/AdvanceCounter';
import CheckboxDeleted from '../checkboxdeleted/CheckboxDeleted';
import CounterStopMoveNextPage from "../counters/CounterStopMoveNextPage";

const Home = () => {
    return (
        <>
            <div className="wrapper">
                {/* counters components */}
                <div className="counter-container">
                    <div><CounterFtn /></div>
                    <div><CounterCls /></div>
                    <div><AdvanceCounter /></div>
                    <div><InfiniteCounter /></div>
                    <div><CounterStopMoveNextPage /></div>
                </div>
                
                {/* ShowDeleteText component */}
                <div className="showDel"><ShowDeleteText /></div>
                {/* DisplayListItem */}
                <div className="DisplayList"><DisplayListItem /></div>
                {/* CheckboxDeleted */}
                <div className='showDel'><CheckboxDeleted /></div>
            </div>
        </>
    )
}

export default Home;