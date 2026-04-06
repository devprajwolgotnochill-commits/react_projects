import { useState ,useCallback ,useEffect} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [password, setPassword] = useState('')



  const generatePassword = useCallback(() => {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-='

    let characters = letters
    if (includeNumbers) characters += numbers
    if (includeSymbols) characters += symbols

    let generatedPassword = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      generatedPassword += characters[randomIndex]
    }
    setPassword(generatedPassword)
  }, [length, includeNumbers, includeSymbols])

  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSymbols, generatePassword]);

  const copy = () => {
    navigator.clipboard.writeText(password)
      .then(() => {
        alert('Password copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy password: ', err);
      });
  }


  return (
    <div className='w-full h-screen flex items-center justify-center bg-black' >
      <div className='bg-gray-800 p-6 rounded-lg shadow-lg w-96'>
        <h1 className='text-2xl font-bold mb-4 text-center text-white'>Password Generator</h1>
        <div className='mb-4'>
          <label className='block text-gray-300 mb-2'>Password Length</label>
          <input
            type='range'
            min='8'
            max='16'
            value={length}
            onChange={(e) => setLength(e.target.value)}
            name=''
            id=''

            className='w-full p-2 rounded bg-gray-700 text-white focus:outline-none'
            
          />
          <label htmlFor="length" className='block text-gray-300 mb-2'>Length: {length} </label>
        </div>

        <div className='mb-4'>
          {/* for numbers (Include Numbers)*/}
          <label className='block text-gray-300 mb-2'>
            <input
              type='checkbox'
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className='mr-2'
            />
            Include Numbers
          </label>

          {/* for symbols (Include Symbols)*/}
          <label className='block text-gray-300 mb-2'>
            <input
              type='checkbox'
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className='mr-2'
            />
            Include Symbols
          </label>

        </div>

        <button
          className='w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded' onClick={copy}>
          COPY TO CLIPBOARD
        </button>

        {password && (
          <div className='mt-4 p-2 bg-gray-700 text-white rounded text-center'>
            {password}
          </div>
        )}

      </div>
    </div>
  )
}

export default App
