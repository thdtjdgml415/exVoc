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
    </table>
  )
}

export default CommonTable