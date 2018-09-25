import React, { Component } from 'react';
import axios from 'axios';

import Search from '../components/Search/Search';
import Item from '../components/Item/Item';


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

    searchHandler = () => {        
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

    render () {
        const items = this.state.items.map( item => {
            return <Item 
                    key={item.id} 
                    title={item.title} />
        });

        return (            
            <div>
                <Search 
                    changed={this.inputChangeHandler}
                    click={this.searchHandler} />
                <section>
                    {items}
                </section>                                    
            </div>
        );     
    }
}

export default Page;