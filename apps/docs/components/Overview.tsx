type Props = {
  classes: String
  values: Array<{ [n: string]: string }>
}

const Preview = ({ values }: Props) => {
  const headers = Object.keys(values[0])
  return (
    <div className="my-8">
      <table className="w-full text-left border-collapse">
        <thead className="text-base text-left">
          <tr>
            {headers.map((header) => (
              <th className="text-slate-700 sticky top-0 z-10 p-0 text-sm font-semibold leading-6 bg-white">
                <div className="border-slate-200 py-2 pr-2 border-b">{header}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="align-baseline">
          {values.map((value) => {
            return (
              <tr className="border-slate-100 border-b">
                {headers.map((header) => (
                  <td className="text-sky-500 whitespace-nowrap py-2 pr-2 font-mono text-base font-medium leading-6">
                    {value[header]}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Preview
