
import React, { Component } from 'react';



class Counters extends Component {
   state = {
      counters:[
         {id:1,value:0,pos:"hgsd"},
         {id:2,value:0}
      ]
     } 
   render() { 
      return (<div>
{this.state.counters.map(count=>key={count.id}value={count.value})}
      </div>);
   }
}
 
export default Counters ;