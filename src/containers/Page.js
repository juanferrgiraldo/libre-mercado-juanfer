import React, { Component } from 'react';
import axios from 'axios';

import Search from '../components/Search/Search';
import Item from '../components/Item/Item';
import Category from '../components/Category/Category';
import Header from '../components/Header/Header';


class Page extends Component {
    state = {
        items: [],
        categories: [],
        query: ''
    }

    componentDidMount() { // Terminar luego
        axios.get(`https://api.mercadolibre.com/sites/MCO/categories`)
            .then( response => {                
                const categories = response.data;
                const updateCategories = categories.map( categorie => {
                    return {
                        ...categorie
                    }
                });
                console.log(response.data);
                this.setState({ categories: updateCategories })               
            });
    }

    inputChangeHandler = (event) => {
        this.setState({ query: event.target.value })
    }

    keyPressHandler = (event) => {
        if(event.key === 'Enter') {
            axios.get(`https://api.mercadolibre.com/sites/MCO/search?q=${this.state.query}`)
            .then( response => {
                const items = response.data.results.slice(0, 5);
                const updateItems = items.map( item => {
                    return {
                        ...item
                    }
                });
                console.log(response.data.results);
                this.setState({ items: updateItems })               
            });
        }
    }

    searchHandler = () => {        
        axios.get(`https://api.mercadolibre.com/sites/MCO/search?q=${this.state.query}`)
            .then( response => {
                const items = response.data.results;
                const updateItems = items.map( item => {
                    return {
                        ...item
                    }
                });
                console.log(response.data.results);
                this.setState({ items: updateItems })               
            });
    }    

    render () {
        const categories = this.state.categories.map( category => {
            return <Category 
                    key={category.id}
                    name={category.name} />
        });

        const items = this.state.items.map( item => {
            return <Item 
                    key={item.id} 
                    title={item.title}
                    price={item.price}
                    image={item.thumbnail}
                    city={item.address.state_name}
                    quantity={item.sold_quantity} />
        });

        return (            
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <Header> </Header>                       
                    </div>                    
                </div>                
                <Search 
                    changed={this.inputChangeHandler}
                    click={this.searchHandler}
                    keyPress={this.keyPressHandler} />
                <div className="row">
                    <div className="categories col-lg-3">
                    <h4 style={{textAlign: "center"}}>Categorías</h4>
                    <hr/>
                        {categories}
                    </div>                                        
                    <section className="col-lg-9">
                    <ol>
                        {items}
                    </ol>                    
                </section>  
                </div>                                                  
            </div>
        );     
    }
}

export default Page;