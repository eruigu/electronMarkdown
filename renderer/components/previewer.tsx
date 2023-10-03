import type React from 'react'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css/github-markdown.css'
import styles from '../styles/react-markdown.module.css'
import { CodeProps } from "react-markdown/lib/ast-to-react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface Props {
  doc: string
}

const Preview = (props: Props) => {
  return <div className='preview markdown-body'>
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className={styles.reactMarkDown}
      components={{
        pre({ ...props }) { return <pre {...props} /> },
        code({ inline, className, children, ...props }: CodeProps) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
              <SyntaxHighlighter
                language={match[1]}
                PreTag="div"
                {...props}
                style={tomorrow}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        }
      }}
    >
      {props.doc}
    </ReactMarkdown>
  </div>
}

export default Preview
