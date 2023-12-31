// import { Component } from "react";
import './card-list.styles.css';
import CardContainer  from '../card-container/card-container.component';

// functional component
const CardList = ({ monsters }) => {
    <div  className="card-list">
    {monsters.map((monster) => {
            return (
                <CardContainer monster = {monster} key={monster.id}/>    
            );
        })}
    </div> 
}

// Class component
// class CardList extends Component {
//     render() {
//         const { monsters } = this.props;
//         return ( 
//             <div  className="card-list">
//                 {monsters.map((monster) => {
//                     return (
//                         <CardContainer monster = {monster} key={monster.id}/>    
//                     );
//                 })}
//             </div> 
//         )
//     }
// }

export default CardList;