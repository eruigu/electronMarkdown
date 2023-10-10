import Editor from  '../components//editor';
import Previewer from  '../components/previewer';
import { useState, useCallback } from 'react'
import { NextPage } from 'next';
import Head from 'next/head'

const Home: NextPage = () => {
  const [doc, setDoc] = useState<string>('# Hello, World!\n')

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc)
  }, [])

  return (
    <main className="flex flex-row h-full bg-opacity-75"> 
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Electron Markdown App"/>
        <title>nextronMardown</title>
      </Head>
      <Editor onChange={handleDocChange} initialDoc={doc} />
      <Previewer doc={doc}/>
    </main>
  )
}

export default Home;
