import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import '/node_modules/react-gridstack/dist/react-gridstack.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {
  SisenseContextProvider,
} from '@sisense/sdk-ui';
import SetupPage from './components/setUpPage/setupPage';
import VisualizationPage from './components/visualisationPage/visualisationPage';
import Header from './components/header/headerComponent';
import widgetContext from './components/widgetContext';


const App = () => {
  const [dropdown1, setDropdown1] = useState<string>('');
  const [dropdown2, setDropdown2] = useState<string>('');
  const [dropdown3, setDropdown3] = useState<string>('');
  const [dropdown4, setDropdown4] = useState<string>('');
  const [dropdown5, setDropdown5] = useState<string>('');
  const [dropdown6, setDropdown6] = useState<string>('');
  const [dropdown7, setDropdown7] = useState<string>('');
  const [widgetTitle, setWidgetTitle] = useState<string>('');
  const [widgets, setWidgets] = useState<any[]>(() => {
    const savedWidgets = localStorage.getItem('widgets');
    return savedWidgets ? JSON.parse(savedWidgets) : [];
  });
  const [isResized, setResized] = useState(false);
  const [dialogTitle1, setDialogTitle1] = useState<string>('');
  const [dialogTitle2, setDialogTitle2] = useState<string>('');
  const [dialogTitle3, setDialogTitle3] = useState<string>('');
  const [dialogTitle4, setDialogTitle4] = useState<string>('');
  const [dialogTitle5, setDialogTitle5] = useState<string>('');
  const [dialogTitle6, setDialogTitle6] = useState<string>('');
  const [dialogTitle7, setDialogTitle7] = useState<string>('');
  const [dialogTitle8, setDialogTitle8] = useState<string>('');
  const [rerenderVal, setRerenderVal] = useState(1);
  return (
    <React.StrictMode>
      <SisenseContextProvider
        url="https://qbeeq-dev.sisense.com"
        token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjM5MzRkMWRmMzlkMDUwMDFiNmY1NWJhIiwiYXBpU2VjcmV0IjoiRTg2RTItRERDNS1GQzNCLUE5Q0ItNTkzNS0zMUMxLTE3MzItNjA3NS0xIiwiYWxsb3dlZFRlbmFudHMiOlsiNjM5MzRkMWRmMzlkMDUwMDFiNmY1NWM3Il0sInRlbmFudElkIjoiNjM5MzRkMWRmMzlkMDUwMDFiNmY1NWM3In0.PC2XmF_b024CWjXJ34rTY5L7nRbSoWpk5orqjqUhDC0"
      >
        <widgetContext.Provider value={{
          dropdown1: dropdown1, setDropdown1: setDropdown1,
          dropdown2: dropdown2, setDropdown2: setDropdown2,
          dropdown3: dropdown3, setDropdown3: setDropdown3,
          dropdown4: dropdown4, setDropdown4: setDropdown4,
          dropdown5: dropdown5, setDropdown5: setDropdown5,
          dropdown6: dropdown6, setDropdown6: setDropdown6,
          dropdown7: dropdown7, setDropdown7: setDropdown7,
          widgetTitle: widgetTitle, setWidgetTitle: setWidgetTitle,
          widgets: widgets, setWidgets: setWidgets,
          isResized: isResized, setResized: setResized,
          dialogTitle1: dialogTitle1, setDialogTitle1: setDialogTitle1,
          dialogTitle2: dialogTitle2, setDialogTitle2: setDialogTitle2,
          dialogTitle3: dialogTitle3, setDialogTitle3: setDialogTitle3,
          dialogTitle4: dialogTitle4, setDialogTitle4: setDialogTitle4,
          dialogTitle5: dialogTitle5, setDialogTitle5: setDialogTitle5,
          dialogTitle6: dialogTitle6, setDialogTitle6: setDialogTitle6,
          dialogTitle7: dialogTitle7, setDialogTitle7: setDialogTitle7,
          dialogTitle8: dialogTitle7, setDialogTitle8: setDialogTitle8,
          rerenderVal, setRerenderVal

        }}>

          <Header />
          <Outlet />

        </widgetContext.Provider>



      </SisenseContextProvider>

    </React.StrictMode>
  );
};
const appRouter = createBrowserRouter([
  {
    "path": "/",
    "element": <App />,
    "children": [
      {
        "path": "/setup",
        "element": <SetupPage />
      },
      {
        "path": "/visualization",
        "element": <VisualizationPage />
      },

    ],



  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={appRouter} />
)
