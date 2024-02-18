import React, { Component } from 'react'
import Book from './Book'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

export default class AddForm extends Component {

    constructor() {
        super()

        this.state = {
            books: [],

            title: '',
            author: '',
            year: '',
            submited:false
        }

    }


    titleHandler(event){
        this.setState({title: event.nativeEvent.target.value})
    }

    authorHandler(event){
        this.setState({author: event.nativeEvent.target.value})
    }

    yearHandler(event){
        this.setState({year: event.nativeEvent.target.value})
    }

    btnSend(event){
        event.preventDefault()
        if(this.state.author.length !== 0 && this.state.title.length !== 0 && this.state.year.length !== 0 ){
            this.setState({submited:true})

            let newBook = {
                id: this.state.books.length + 1,
                title: this.state.author,
                author: this.state.author,
                year: this.state.year
            }

            this.setState({
                books: [...this.state.books,newBook]
            })
            
            this.setState({
                author:"",
                title:"",
                year:""
            })
        }
    }
    render() {
        return (
          <>
            <form id="book-form" autocomplete="off" onSubmit={(event) => this.btnSend(event)}>
              <div className="form-group">
                <label for="title">Title</label>
                <input
                  type="text"
                  id="title"
                  className="form-control"
                  value={this.state.title}
                  onChange={(event) => this.titleHandler(event)}
                />
              </div>

              <div className="form-group">
                <label for="author">Author</label>
                <input
                  type="text"
                  id="author"
                  className="form-control"
                  value={this.state.author}
                  onChange={(event) => this.authorHandler(event)}
                />
              </div>

              <div className="form-group">
                <label for="year">Year</label>
                <input
                  type="text"
                  id="year"
                  className="form-control"
                  value={this.state.year}
                  onChange={(event) => this.yearHandler(event)}
                />
              </div>
              <input
                type="submit"
                value="Add Book"
                className="btn btn-warning btn-block add-btn"
              />
            </form>
            <table class="table table-striped mt-5 text-center">
              <thead>
                {this.state.submited &&
                  this.state.books.map((book) => (
                        <Book {...book} />
                  ))}
              </thead>
              <tbody id="book-list">
                <Book />
              </tbody>
            </table>
          </>
        );
    }
}
