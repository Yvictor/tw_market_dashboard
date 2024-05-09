import { useState } from 'react'
import { useWindowSize } from '@react-hook/window-size'
import './App.css'
import Plot from 'react-plotly.js'
import fetchContribution from './api/contribution'
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from './components/ui/card'

function App() {
  const [width, height] = useWindowSize()
  const [data, customdata] = fetchContribution()

  return (
    <>
      <Plot
        data={[
          {
            type: "treemap",
            labels: data["labels"],
            parents: data["parents"],
            values: data["ContribRatio"],
            // ids: data["Code"],
            marker: {
              coloraxis: "coloraxis",
              colors: data["ChangePct"],
            },
            // textinfo: "label+value",
            texttemplate: "%{label}<br>%{customdata[5]}<br>%{customdata[1]:.2f}點<br>%{customdata[3]:t}(%{customdata[4]:t})<br>%{customdata[2]:.2f}%",
            hovertemplate: "%{label}<br>貢獻點=%{customdata[1]:.2f}<br>漲跌幅=%{customdata[2]:.2f}%<br>現價=%{customdata[3]:t}<br>漲跌=%{customdata[4]:t}",
            domain: { "x": [0, 1], y: [0, 1] },
            // outsidetextfont: { "size": 20, "color": "#377eb8" },
            // marker: { "line": { "width": 2 } },
            customdata: customdata,
            branchvalues: "total",
            textposition: "middle center",
            textfont: {
              size: 24
            },
            // pathbar: { "visible": true }
          },
        ]}
        layout={{
          width: width * 0.95,
          height: height * 0.95,
          // legend: { tracegroupgap: 0 },
          margin: { t: 0, b: 0, l: 0, r: 0 },
          coloraxis: {
            cmid: 0,
            colorbar: {
              title: "漲跌幅",
            },
            cmax: 10,
            cmibn: -10,
            colorscale: [
              [0.0, "rgb(0, 147, 146)"],
              [0.16666666666666666, "rgb(114, 170, 161)"],
              [0.3333333333333333, "rgb(177, 199, 179)"],
              [0.5, 'rgb(241, 234,200)'],
              [0.6666666666666666, 'rgb(229, 185, 173)'],
              [0.8333333333333334, 'rgb(217, 137, 148)'],
              [1.0, 'rgb(208, 88, 126)']]
          }
          // annotations: [{
          //   showarrow: false,
          //   text: "branchvalues: <b>remainder</b>",
          //   x: 0.25,
          //   xanchor: "center",
          //   y: 1.1,
          //   yanchor: "bottom"
          // }]
        }}
      />

    </>
  )
}

export default App
