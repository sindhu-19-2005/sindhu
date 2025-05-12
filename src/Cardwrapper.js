import Card1 from './Card1';
import Card2 from "./Card2";
import './Cardwrapper.css';
import Card3 from './Card3';

function Cardwrapper(){
    return(
        <div className="card-wrapper">
            <Card1/>
            <Card2/>
            <Card3/>
        </div>
    )
}

export default Cardwrapper;