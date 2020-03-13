import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
    state = {
        api: []
    };

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
         const response = await api.get("/api");
            this.setState({ api: response.data})
         //console.log(response.data[0].codigo);
    };

    render(){
        const { api } = this.state;
    return (
        <div className="product-list">
            {api.map(product =>(
                <article key={product._codigo}>
                    <strong>{product.nomeCasa}</strong>
                        <p>{product.local}</p>

                        <a href="">Casa de Evento</a>
                </article>
                
                //<h2 key={product._codigo}>{product.nomeCasa}</h2>
            ))}

        </div>
    );
    
    }
}