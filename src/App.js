import { useState } from "react";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";


const INITIAL_COSTS = [
  {
    id: 'c1',
    date:new Date(2023, 9, 28),
    description: "Холодильник",
    costAmout: 999.99
  },
  {
    id: 'c2',
    date:new Date(2021, 11, 15),
    description: "MacBook",
    costAmout: 1254.72
  },
  {
    id: 'c3',
    date:new Date(2022, 7, 3),
    description: "Джинсы",
    costAmout: 49.99
  },
  {
    id: 'c4',
    date:new Date(2022, 1, 26),
    description: "Утюг",
    costAmout: 150.00
  },
  {
    id: 'c5',
    date:new Date(2021, 3, 13),
    description: "Книга",
    costAmout: 60.00
  },
  {
    id: 'c6',
    date:new Date(2023, 1, 5),
    description: "Продукты",
    costAmout: 100.00
  },
  {
    id: 'c7',
    date:new Date(2021, 5, 10),
    description: "Кольцо",
    costAmout: 300.00
  },
  {
    id: 'c8',
    date:new Date(2022, 2, 15),
    description: "Курсы",
    costAmout: 100.00
  },
  {
    id: 'c9',
    date:new Date(2022, 5, 1),
    description: "Юбка",
    costAmout: 45.00
  },
  {
    id: 'c10',
    date:new Date(2022, 11, 16),
    description: "Подарок на ДР",
    costAmout: 100.00
  },
  
];

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
        setCosts(prevCost => {
          return [cost, ...prevCost]
        });
        // console.log(cost);
  };

  return (
    <div>
        <NewCost onAddCost={addCostHandler}/>
        <Costs costs={costs}/>      
    </div>
  );
}

export default App;
