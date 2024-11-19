import BoilerPlate from './Components/BoilerPlate/BoilerPlate.js';
import ThemeButton from './Components/ThemeButton/ThemeButton.js';

function App() {
  return (
    <div className="App">
      <BoilerPlate ThemeButton={<ThemeButton />} />
    </div>
  );
}

export default App;
