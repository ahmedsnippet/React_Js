import React, { useState, useEffect } from 'react'
import { ThemeProvider } from './context/Theme'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'

const App = () => {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])



  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <h1 className='p-4 bg-pink-500 text-3xl text-center font-bold'>ThemeSwitcher</h1>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App