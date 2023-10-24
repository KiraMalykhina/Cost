import CostItem from './CostItem';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './CostList.css';

const CostList = (props) => {

    const renderCostList = (arr) => {

        if(arr.length === 0) {
            return (
                   <CSSTransition timeout={0} classNames="item">
                    <h2 className='cost-list__fallback'>В этом году расходов нет</h2>
                    </CSSTransition>              
            )
        }
    
        return (    
                    arr.map(cost => {
                        return (
                            <CSSTransition key={cost.id} timeout={500} classNames="item">
                                    <CostItem
                                    onDelete={() => props.onDelete(cost.id)}
                                    id={cost.id}
                                    key={cost.id}
                                    date={cost.date}
                                    description={cost.description}
                                    amout={cost.costAmout}/>  
                            </CSSTransition>        
                        );
                    })                      
                                                                          
         );

    };

    const elements = renderCostList(props.costs);

    return <TransitionGroup component='ul' className='cost-list'>{elements}</TransitionGroup>
}
export default CostList