// import { Alert } from 'bootstrap';
import React, { Component, Fragment } from 'react';
import { Table, Card, InputGroup, Form, InputGroupText, Alert } from 'react-bootstrap'
import { data } from '../data'

export class Index extends Component {
    render() {
        return (
            <div>
                <ProductTable />
            </div>
        )
    }
}

export default Index;

class ProductTable extends Component {

    render() {

        return (
            <Card>
                <Table bordered striped>

                    {/* <TableBody data={this.state.filtered} /> */}
                    <Date />

                </Table>
            </Card>
        )
    }
}


class Date extends Component {
    render() {
        var datesFilter = new Set([]);
        data.forEach((elem) => {
            datesFilter.add(elem.date)
        })
        

        return (
            <>
                <TableBody date={Array.from(datesFilter)} />
            </>
        )
    }
}




class TableBody extends Component {
    constructor(props) {
        super(props)

        this.state = {


        }

    }

    render() {
        


        return (
            <>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Complete</th>
                        <th>Canceled</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.date.map((elem, index) => (
                            <Fragment key={index}>
                                <tr><td>{elem}</td></tr >
                                {
                                    data.map((item, index) => (
                                        <Fragment key={index}>


                                            {
                                                elem === item.date &&

                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.title}</td>
                                                    <td>{item.description}</td>
                                                    <td>{item.complete ? ' true ' : ' false '}</td>
                                                    <td>{item.canceled ? ' true ' : ' false '}</td>
                                                    <td></td>

                                                </tr>

                                            }
                                        </Fragment>
                                    ))
                                }

                            </Fragment>

                        ))
                    }
                </tbody>
            </>
        )
    }
}









// import React, { Component, Fragment } from 'react';
// import { Table, Card, InputGroup, Form, InputGroupText, Alert } from 'react-bootstrap'
// import { data } from '../data'

// export class Index extends Component {
//     render() {
//         return (
//             <div>
//                 <ProductTable />
//             </div>
//         )
//     }
// }

// export default Index;

// class ProductTable extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             filtered: data,
//             searchText: ""
//         }
//     }
//     onChange = (e) => {
//         this.setState({
//             searchText: e.target.value
//         })
//     }
//     productFilter = () => {
//         this.setState({
//             filtered: this.state.filtered.filter(item =>{
//                 if (item.name.includes(this.state.searchText)) {
//                     return item;
//                 }
//             })
//         })
//     }
//     render() {
//         console.log(this.state.searchText)
//         return (
//             <Card>
//                 <Search searchText={this.state.searchText} onChange={this.onChange}  />
//                 <Table bordered striped>

//                     <TableBody data={this.state.filtered} />


//                 </Table>
//             </Card>
//         )
//     }
// }


// class Search extends Component {
//     constructor(props) {
//         super(props)

//         //   this.state = {

//         //   }
//     }

//     render() {
//         return (
//             < Card.Header>
//                 <InputGroup>
//                     <Form.Control placeholder="search"  value={this.props.searchText} onChange={this.props.onChange} />
//                     <InputGroup.Text  >Go</InputGroup.Text>
//                 </InputGroup>
//             </Card.Header>
//         )
//     }
// }




// class TableBody extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             data: this.props.data

//         }

//     }
//     buyGood = (idx) => {
//         const newData = this.state.data.map((item, index) => {
//             if (index === idx) {
//                 item.GoodsLeft = item.GoodsLeft - this.state[`num${idx}`]
//             }
//             return item
//         })
//         this.setState({
//             data: newData,
//             [`num${idx}`]: 0
//         })
//     }

//     render() {
//         let category = [];
//         let prevCategory = null
//         const sort = data.forEach((elem, index) => {
//             if (elem.category !== prevCategory) {
//                 category = [...category, elem.category]

//             }
//             prevCategory = elem.category

//         })


//         return (
//             <>
//                 <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Description</th>
//                         <th>Complete</th>
//                         <th>Canceled</th>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         category.map((elem, index) => (
//                             <Fragment key={index}>
//                                 <tr><td>{elem}</td></tr >
//                                 {
//                                     this.state.data.map((item, idx) => (
//                                         <Fragment key={idx}>


//                                             {
//                                                 elem === item.category &&

//                                                 <tr>
//                                                     <td>{item.title}</td>
//                                                     <td>{item.description}</td>
//                                                     <td>{item.complete ? ' in stock ' : ' out of stock'}</td>
//                                                     <td>{item.canceled ? ' in stock ' : ' out of stock'}</td>
//                                                     <td>
//                                                         <InputGroup>
//                                                             <Form.Control
//                                                                 placeholder=" number of goods "
//                                                                 type="number"
//                                                                 value={this.state.num}
//                                                                 onChange={(event) => {
//                                                                     console.log(`num${idx}`, this.state[`num${idx}`])
//                                                                     this.setState({
//                                                                         [`num${idx}`]: event.target.value
//                                                                     })
//                                                                 }
//                                                                 }
//                                                             />
//                                                             <InputGroup.Text onClick={() => this.buyGood(idx)}> Buy now</InputGroup.Text>
//                                                         </InputGroup>
//                                                         {
//                                                             +this.state[`num${idx}`] <= 0  &&
//                                                             <Alert variant="danger">Invalid Number</Alert>
//                                                         }
//                                                         {
//                                                             +this.state[`num${idx}`] > +item.GoodsLeft &&
//                                                             <Alert variant="danger"> we dont have that amount </Alert>
//                                                         }
//                                                     </td>

//                                                 </tr>

//                                             }
//                                         </Fragment>
//                                     ))
//                                 }

//                             </Fragment>

//                         ))
//                     }
//                 </tbody>
//             </>
//         )
//     }
// }






