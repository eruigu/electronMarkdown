import React from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkReact from 'remark-react'
import RemarkCode from './remark'
import { defaultSchema } from 'hast-util-sanitize'

interface Props {
  doc: string
}

const schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    code: [...(defaultSchema.attributes?.code || []), 'className']
  }
}

const Previewer: React.FC<Props> = (props) => {
  const md = unified()
    .use(remarkGfm)
    .use(remarkParse)
    .use(remarkReact, {
      createElement: React.createElement,
      sanitize: schema,
      remarkReactComponents: {
        code: RemarkCode
      }
    })
    .processSync(props.doc).result

    console.log(md)
  return <div className='p-12 overflow-auto box-border text-[#abb2bf] flex-[0_0_50%]'>
    <>{md}</> 
  </div>
}

export default Previewer
