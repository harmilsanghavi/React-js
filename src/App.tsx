import './App.css';
import { User } from './components/context/User';
import { UserContext } from './components/context/UserContext';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
// import { User } from './components/state/User';

function App() {
  return (
    <div className="App">
      {/* <Greet name="harmil" messageCount={10} />
      <Status Status='error' />
      <ClickEvent handleClick={(event,id)=>{
        console.log("clicked ",event,id)
      }} />
      <ChangeEvent value='' handleChnage={(event) =>{}} /> */}
      {/* <User name="jhon" email="jhon@gmail.com"/> */}
      {/* <Counter />
      <ThemeContext>
        <Box /> 
      </ThemeContext> */}

      <UserContext>
        <User />
      </UserContext>

      <DomRef />
      <MutableRef />

    </div>
  );
}

export default App;
