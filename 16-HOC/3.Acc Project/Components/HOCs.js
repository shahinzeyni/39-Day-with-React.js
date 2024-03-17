import React,{useState} from 'react'

function HOCs(OrginalComponent) {
  const NewComponent = (props) => {
    const [showInfo, setShowInfo] = useState(false);

    const toggleShowInfoHandler = () => {
      setShowInfo((prevShowInfo) => !prevShowInfo);
    };
    return <OrginalComponent showInfo={showInfo} toggleShowInfoHandler={toggleShowInfoHandler} {...props} />
  };

  return NewComponent
}

export default HOCs