import useCodeMirror from './codemirror'
import React, { useCallback } from 'react'
import { EditorState } from '@codemirror/state';

interface Props {
  initialDoc: string,
  onChange: (doc: string) => void
}

const Editor: React.FC<Props> = (props) => {
  const { onChange, initialDoc } = props

  const handleChange = useCallback(
    (state: EditorState) => onChange(state.doc.toString()),
    [onChange]
  )
  const [refContainer ] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange
  })

  return <div className='h-full flex-[0_0_50%]' ref={refContainer}></div>
}

export default Editor
