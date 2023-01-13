import React from 'react'

const CommonTable = (porps) => {
  return (
    <table>
        <thead>
            <tr>
                {
                    headersName.map((item, index) => {
                        return (
                            <td className='common-table-header-column' key={index}>{ item }</td>
                        )
                    })
                }
            </tr>
        </thead>
        <tbody>
            {
                children
            }
        </tbody>
    </table>
  )
}

export default CommonTable