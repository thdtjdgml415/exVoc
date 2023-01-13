import React from 'react'
import './CommonTable.css'

const CommonTable = props => {
    const {headersName, children} = props;

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