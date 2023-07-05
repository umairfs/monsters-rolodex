// import { Component } from "react";
import './card-container.styles.css';

// Functional component
const CardContainer = ({monster}) => {
    const {name, email, id } = monster;
    return ( 
        <div className="card-container" key={id}>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div> 
    ) 
}

// Class component
// class CardContainer extends Component {
//     render () {
//         const { monster } = this.props;
//         const {name, email, id } = monster;
//         return ( 
//             <div className="card-container" key={id}>
//                 <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div> 
//         ) 
//     }
// }

export default CardContainer;