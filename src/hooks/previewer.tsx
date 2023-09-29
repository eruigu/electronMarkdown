import './previewer.css'
import React from 'react'
import RemarkCode from './remark'
import { unified } from 'unified'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkReact from 'remark-react'
import 'github-markdown-css/github-markdown.css'
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

const Preview: React.FC<Props> = (props) => {
  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkReact, {
      createElement: React.createElement,
      sanitize: schema,
      remarkReactComponents: {
        code: RemarkCode
      }
    })
    .processSync(props.doc).result

    // console.log(md)
  return <div className='preview markdown-body'>{md}</div>
}

export default Preview
