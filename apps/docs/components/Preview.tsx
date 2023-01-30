import { ReactNode } from 'react'

type Props = {
  classes?: String
  centered?: Boolean
  children?: ReactNode
}

const Preview = (props: Props) => {
  return (
    <div
      dir="rtl"
      className={`border-n-gray-300 rounded border shadow-n-sm p-5 my-8 font-yekanBakh ${
        props.centered ? 'flex items-center justify-center' : ''
      } ${props.classes} not-prose`}>
      {props.children}
    </div>
  )
}

export default Preview
