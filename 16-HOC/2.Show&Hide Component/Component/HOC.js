import React,{useState} from 'react'

function HOC(OrginalComponent) {
    const NewComponent = () => {
        const [isShow,setIsShow] = useState(false)

        const showHandler = () => {
          setIsShow((prev) => !prev);
        }

        return <OrginalComponent showHandler={showHandler} isShow={isShow} />
    }
    return NewComponent
}

export default HOC;