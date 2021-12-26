import React from 'react';

//import data
import { faq } from './accordion.data';

//import styles
import './accordion.styles.scss';

class Accordion extends React.Component {
    constructor() {
        super();

        this.state = {
            data: faq,
        }
    }

    toggleAccordion(accordion_index) {
        //map returns new array after changing something from the existing array
        //spread operator returns every property of the object including the changed property
        const newData = this.state.data.map(eachData =>
            eachData.id == accordion_index ? { ...eachData, toggle: !eachData.toggle } : eachData
        )

        //state can't be mutated directly
        this.setState({ data: newData })
    }

    render() {
        return (
            <div className='accordion-container'>
                <h1>Frequently Asked <span className='text-primary'>Questions</span></h1>
                {this.state.data.map((eachData, index) => (
                    <div key={index}>

                        {/*Arrow functions helps to create a new instance on every render*/}
                        <h3 className="accordion-header" onClick={() => this.toggleAccordion(index)}>{eachData.question}</h3>


                        <p className={`${eachData.toggle ? 'unhide' : 'hide'} accordion-content`}>{eachData.answer}</p>

                    </div>
                ))}
            </div>
        )
    }
}

export default Accordion;