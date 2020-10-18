import React from 'react';


function PageContainer(props){
    
    let pageStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }

    return(
        <div style={pageStyle} className="page" >
            {props.children}
        </div>
    )

}

export default PageContainer;