import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Plot from 'react-plotly.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={{width: 0, height: 0, title: 'A Fancy Plot'}}
      />
    </>
  )
}

export default App
