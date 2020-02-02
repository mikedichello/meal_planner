import React, {Component} from 'react';
import PieChart from './PieChart';


class Index extends Component {
    state = {
        meals: [],
        chosenMeal: 'party!'
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

    handleChange = (event) => {
		this.setState({ [event.target.id]: event.target.value });
	};

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
                                <li onclick>{meal.name}</li>
                            )
                        })}
                        </nav>
                        <article className="flex-article">
                            <h1>{this.state.chosenMeal.name}</h1>
                            <PieChart />
                        </article>
                        <div className="flex-form">
                            <form>

                            </form>
                        </div>
                    </main>
                    <footer className="flex-footer">
                        <h6>Michael DiChello 2020</h6>
                    </footer>
                </div>
            </>
        )
    }
}

export default Index