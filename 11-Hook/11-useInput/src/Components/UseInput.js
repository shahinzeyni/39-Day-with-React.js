import React, { useState } from 'react'

export default function UseInput(init) {
    const [value,setValue] = useState(init)

    const resetInp = () => {
        setValue("")
    }

    const binding = {
        value:value,
        onChange : (e) => {
            setValue(e.target.value)
        }
    }
  return [value,binding,resetInp]
}
