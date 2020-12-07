import './App.css';
import 'fontsource-roboto';
import { Select, MenuItem } from '@material-ui/core';

function App() {
  return (
    <div>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
      >
        <MenuItem value={10}>GIZ</MenuItem>
        <MenuItem value={20}>SABA+</MenuItem>
        <MenuItem value={30}>Artesanal</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </div>
  );
}

export default App;
