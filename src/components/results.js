/* eslint-disable no-unused-vars */
import React from 'react';

class Results extends React.Component {
    
    resultsFun= (data) => {
        let result = JSON.stringify(data ,null , '\t');
        return result ;
      }
      
    
      render() {
        return(
          <>
            <span>
                {this.resultsFun(this.props.results)} 
                </span>
          </>
        );
      }


}


export default Results ;

