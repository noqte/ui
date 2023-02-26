import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const Preview = ({ children, ...props }) => {
  const [contentRef, setContentRef] = useState(null)
  const mountNode = contentRef?.contentWindow?.document?.body
  useEffect(() => {
    if (!contentRef) {
      return
    }
    const win = contentRef?.contentWindow
    const styles = document.createElement('link')
    styles.rel = 'stylesheet'
    styles.type = 'text/css'
    styles.href = '/noqte.css'
    win.document.head.appendChild(styles)
    contentRef.height = win.document.body.scrollHeight
  }, [contentRef])
  return (
    <iframe ref={setContentRef} dir="rtl" width="100%" seamless>
      {mountNode &&
        createPortal(
          <>
            <div
              className={`border-n-gray-300 rounded border shadow-n-sm p-5 my-8 font-yekanBakh ${
                props.centered ? 'flex items-center justify-center' : ''
              } ${props.classes} not-prose`}
              dir="rtl">
              {children}
            </div>
          </>,
          mountNode
        )}
    </iframe>
  )
}

export default Preview
