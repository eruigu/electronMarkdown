import "./App.css"
import Editor from  '../hooks/editor';
import Previewer from  '../hooks/previewer';
import { useState, useCallback } from 'react'

const App = () => {
  const [doc, setDoc] = useState<string>('# Hello, World!\n')

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc)
  }, [])

  return (
    <div className="h-full flex flex-row bg-transparent">
      <Editor onChange={handleDocChange} initialDoc={doc} />
      <Previewer  doc={doc}/>
    </div>
  )
}

export default App;
