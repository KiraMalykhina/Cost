import { useState } from 'react';
// import { Transition } from 'react-transition-group';
import './CostForm.css';

const CostForm = (props) => {

    const [name, setName] = useState('');
    const [sum, setSum] =useState('');
    const [date, setDate] =useState('');

    const nameChangeHandler = (e) => {
        setName(e.target.value)
  
    };

    const sumChangeHandler = (e) => {
        setSum(e.target.value)
    }
        
    const dateChangeHandler = (e) => {
        setDate(e.target.value)     
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const costData = {
            description: name,
            costAmout: sum,
            date: new Date(date)   
        };
        props.onSaveCostData(costData);
        setName('');;
        setSum('');
        setDate('');
    }

    return (
            <form onSubmit={submitHandler}>
                <div className="new-cost__controls">
                    <div className="new-cost__control">
                        <label htmlFor="">Название</label>
                        <input type="text" 
                            onChange={nameChangeHandler} 
                            value={name} />     
                    </div>
                    <div className="new-cost__control">
                        <label htmlFor="">Сумма</label>
                        <input type="number"
                            min="0.01"  
                            step="0.01" 
                            onChange={sumChangeHandler} 
                            value={sum}/>     
                    </div>
                    <div className="new-cost__control">
                        <label htmlFor="">Дата</label>
                        <input type="date" 
                            min="2022.01.01" 
                            step="2023.12.31" 
                            onChange={dateChangeHandler} 
                            value={date}/>     
                    </div>
                    <div className="new-cost__actions">
                        <button type="submit">Добавить расход</button>
                        <button type="button" onClick={props.onCancelForm}>Отмена</button>
                    </div>
                </div>
            </form>         
       
    )
}

export default CostForm;