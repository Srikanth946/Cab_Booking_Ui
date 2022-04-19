import React, { Component } from 'react'

export default class FooterComponent extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
  render() {
    return (
      <div>
          <footer class="footer">
          <span className='text-muted'>All Rights Reserved 2020</span>
          </footer>
      </div>
    )
  }
}
