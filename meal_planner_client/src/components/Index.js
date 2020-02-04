import React, {Component} from 'react';
import PieChart from './PieChart';


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meals: [],
            chosenMeal: null,
            formInputs: {
                name: '',
                description: '',
                calories: '',
                carbs_g: '',
                fat_g: '',
                protein_g: '',
            }
        }
        this.getMeals = this.getMeals.bind(this);
        this.changeFocus = this.changeFocus.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    componentDidMount(){
        this.getMeals()
    }

    getMeals () {
        fetch('http://localhost:3000/meals')
            .then(res =>res.json())
            .then(jsonedMeals => this.setState({meals: jsonedMeals}))
            .catch(err => console.log(err))
    }

    handleChange(event) {
		this.setState({ [event.target.id]: event.target.value });
    };

    changeFocus(meal) {
        this.setState({chosenMeal: meal})
    }
    


    render() {
        return(
            <>
                <div className="flex-container">
                    <header className="flex-header">
                        <h1>Meal Tracker</h1>
                    </header>
                    <main className="flex-main">
                        <nav className="flex-nav">
                        {this.state.meals.map( meal => {
                            return(
                                <li key={meal.id} onClick={()=>{this.changeFocus(meal)}}>{meal.name} <img src="trash.png" /></li>
                            )
                        })}
                        </nav>
                        <article className="flex-article">
                            {this.state.chosenMeal === null
                            ? <h1 className="alert">PLEASE SELECT MEAL FROM LIST</h1>
                            : <>
                                <h1>{this.state.chosenMeal.name}</h1>
                                <h2>{this.state.chosenMeal.calories} Calories</h2>
                                <PieChart meal={this.state.chosenMeal}/>
                                <h3>Description:</h3>
                                <p>{this.state.chosenMeal.description}</p>
                              </>
                            }
                            
                        </article>
                        <div className="flex-form">
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="name">Name:  </label>
                            <input type="text" value={this.state.formInputs.name} onChange={this.handleChange} id="name" />
                            <br />
                            <label htmlFor='description'>Description: </label>
                            <input type='text' value={this.state.formInputs.description} onChange={this.handleChange} id='description' />
                            <br />
                            <label htmlFor='calories'>Calories:  </label>
                            <input type='number' value={this.state.formInputs.carbs_g + this.state.formInputs.fat_g + this.state.formInputs.protein_g} onChange={this.handleChange} id='calories' />
                            <br />
                            <label htmlFor='carbs_g'>Carbs (grams):  </label>
                            <input type='number' value={this.state.formInputs.carbs_g} onChange={this.handleChange} id='carbs_g' />
                            <br />
                            <label htmlFor='fat_g'>Fat (grams):  </label>
                            <input type='number' value={this.state.formInputs.fat_g} onChange={this.handleChange} id='fat_g' />
                            <br />
                            <label htmlFor='protein_g'>Protein (grams):  </label>
                            <input type='number' value={this.state.formInputs.protein_g} onChange={this.handleChange} id='protein_g' />
                            <br />
                            <input type="submit" />
                        </form>
                            
                        </div>
                    </main>
                    <footer className="flex-footer">
                        <p>© Michael DiChello 2020</p>
                    </footer>
                </div>
            </>
        )
    }
}

export default Index