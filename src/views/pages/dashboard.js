import React from 'react'
import AdicionarCliente from '../components/clientComponent'
import { Stack } from 'react-bootstrap'

function Dashboard() {
    return (
        <div>
    <Stack direction="horizontal" gap={2}>
      <div className="p-2">
      <AdicionarCliente />
      </div>

      <div className="p-2">Second item</div>
      
    </Stack>
            
        </div>
    )
}

export default Dashboard