import './App.css';
import RenderView from './Components/RenderView'
import TextInput from './Components/TextInput'
import Image from './Components/Image'
import Button from './Components/Button'
import Slider from './Components/Slider'


function App() {
  return (
    <div className="App">
      <RenderView />
      <TextInput />
      <Image />
      <Button />
      <Slider/>
    </div>
  );
}

export default App;
