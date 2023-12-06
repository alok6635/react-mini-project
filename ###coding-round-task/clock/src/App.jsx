import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Clock from './components/Clock';
import ClockSlogan from './components/ClockSlogan';
import ClockTime from './components/ClockTime';


const App = () => {
  return (
    <>
      <center className="to-do-container">
        <Clock/>
        <ClockSlogan/>
        <ClockTime/>
      </center>
    </>
  )
}

export default App;