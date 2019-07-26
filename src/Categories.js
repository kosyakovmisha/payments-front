import React from 'react';
import { Table, Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';

export class Categories extends React.Component{

    state = {
        categories : [],
    }

    componentDidMount() {
        this.fetchCategories();
    }

    fetchCategories = () => {
        fetch("http://localhost:8080/api/categories")
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                let dataFromApi = data.map(category => { return { id: category.id, name: category.name } })
                this.setState( { categories: dataFromApi } );
            }).catch(error => {
                console.log(error)
            })
    }

    renderCategories = () => {
        return this.state.categories.map(function(item) {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td class="text-right">
                            <Button variant="success" size="sm">Change</Button>
                            <Button variant="danger" size="sm">Delete</Button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <br/>
                <h1>Categories</h1>
                <br/>
                <table class="table table-striped table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCategories()}
                    </tbody>
                </table>
            </div>
        )
    }
}