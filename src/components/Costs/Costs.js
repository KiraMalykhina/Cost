import { useState } from "react";
import Card from "../UI/Card";
import CostsFilter from "./CostFilter";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

import './Costs.css';


const Costs = (props) => {

    const [selectedYear, setselectedYear] = useState('2022');

    const yearChangeHandler = (year) => {
        setselectedYear(year);
    };

    const filteredCosts = props.costs.filter((cost) => {
        return cost.date.getFullYear().toString() === selectedYear;
    });
   
    return (
        <div>
            <Card className='costs'>
            <CostsFilter year={selectedYear} 
                         onChangeYear={yearChangeHandler}/>
            <CostsDiagram costs={filteredCosts}/>
            <CostList costs={filteredCosts}/>
            </Card>
        </div>        
    );
};

export default Costs;