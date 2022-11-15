import { useState } from 'react'
import moon from './assets/moon.svg'
import sun from './assets/sun.svg'

type Theme = 'dark' | 'light'

const App = () => {
  const [theme, setTheme] = useState<Theme>('light')

  const handleChangeTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      return
    }
    setTheme('light')
  }

  return (
    <div
      className="container"
      style={{ background: theme !== 'light' ? '#f1f1f1' : '#292C35' }}
    >
      <div className="switch">
        <img src={moon} alt="moon" />
        <img src={sun} alt="sun" />
        <div
          className="togle"
          style={{ left: theme === 'light' ? '150px' : '-150px' }}
          onClick={handleChangeTheme}
        />
      </div>
    </div>
  )
}

export default App
