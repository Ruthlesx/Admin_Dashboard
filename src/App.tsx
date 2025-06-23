import { ColorModeContext } from './theme'
import { CssBaseline, ThemeProvider } from "@mui/material"
import './App.css'
import {useMode} from "./theme"
import Topbar from "./scenes/global/Topbar"
import Dashboard from "./scenes/dashboard/index"
import Sidebar from "./scenes/global/Sidebar"
import {Routes, Route} from "react-router-dom"
import { ProSidebarProvider } from 'react-pro-sidebar'
import Team from "./scenes/team"
import Contacts from "./scenes/contacts"
import Invoice from "./scenes/invoices"
import Form from "./scenes/form"
import Calendar from './scenes/calendar'
import Faq from './scenes/faq'
import Bar from './scenes/bar'


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
        <CssBaseline />
        <div className='app'>

          <Sidebar />
          <main className='content'>
            <Topbar />

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team/>} />
             <Route path="/contacts" element={<Contacts/>} />
              <Route path="/invoices" element={<Invoice/>} />
              <Route path="/forms" element={<Form/>} />\
              <Route path="/calendar" element={<Calendar/>} />
              <Route path="/faq" element={<Faq/>} />
              <Route path="/bar" element={<Bar/>} />     


            </Routes>
          </main>
        </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
