import React, { Component } from 'react';
import { Form, Container, Button} from 'reactstrap';

class Home extends Component {

  handle= (i) =>{
    this.props.history.push(`${i}`) //truyền string
  }

  render() {
    // cách sử dụng vòng lặp
    // const array1 = [
    //   {
    //     image : "https://cdn.vatgia.vn/pictures/thumb/418x418/2016/09/zwu1474964173.png",
    //     info : "Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm"
    //   },
    //   {
    //     image : "https://cdn.vatgia.vn/pictures/thumb/418x418/2016/09/zwu1474964173.png",
    //     info : "Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm"
    //   },
    // ]
    // console.log("đsadá",this.props)
    // let a= []
    // for(let i = 0; i< array1.length ; i++){
    //   a.push(<Form className="form">
    //   <img class="image" src={array1[i].image} alt="" />                                                {/*array1[i] && array1[i].image ? array1[i].image : ""*/}
    //   <p>{ array1[i].info}</p>                                                                          {/*array1[i] && array1[i].info ? array1[i].info : ""*/}
    //   <div href="/" onClick={()=>this.handle(i)}>Chi tiết thiết bị</div>  
    //  </Form>)
    // }
    return (      
      <Container id="home">
        {/* {a} */}
        <Form className="form">
         <img class="image" src="https://cdn.vatgia.vn/pictures/thumb/418x418/2016/09/zwu1474964173.png" alt="" />
         <p>Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm</p>      
         <div href="/" onClick={()=>this.handle(1)}>Chi tiết thiết bị</div>  
        </Form>
        <Form className="form">
         <img class="image" src="https://cdn.vatgia.vn/pictures/thumb/418x418/2016/09/zwu1474964173.png" alt="" />       
         <p>Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm</p>    
         <div href="/" onClick={()=>this.handle(2)}>Chi tiết thiết bị</div>  
        </Form>
        <Form className="form">
         <img class="image" src="https://cdn.vatgia.vn/pictures/thumb/418x418/2016/09/zwu1474964173.png" alt="" />       
         <p>Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm</p>    
         <div href="/" onClick={()=>this.handle(3)}>Chi tiết thiết bị</div>  
        </Form>
        <Form className="form">
         <img class="image" src="https://cdn.vatgia.vn/pictures/thumb/418x418/2016/09/zwu1474964173.png" alt="" />       
         <p>Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm</p>    
         <div href="/" onClick={()=>this.handle(4)}>Chi tiết thiết bị</div>  
        </Form>
        <Form className="form">
         <img class="image" src="https://cdn.vatgia.vn/pictures/thumb/418x418/2016/09/zwu1474964173.png" alt="" />       
         <p>Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm</p>    
         <div href="/" onClick={()=>this.handle(5)}>Chi tiết thiết bị</div>  
        </Form>
        <Form className="form">
         <img class="image" src="https://cdn.vatgia.vn/pictures/thumb/418x418/2016/09/zwu1474964173.png" alt="" />       
         <p>Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm</p>    
         <div href="/" onClick={()=>this.handle(6)}>Chi tiết thiết bị</div>  
        </Form>
        <Form className="form">
         <img class="image" src="https://cdn.vatgia.vn/pictures/thumb/418x418/2016/09/zwu1474964173.png" alt="" />       
         <p>Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm</p>    
         <div href="/" onClick={()=>this.handle(7)}>Chi tiết thiết bị</div>  
        </Form>
        <Form className="form">
         <img class="image" src="https://cdn.vatgia.vn/pictures/thumb/418x418/2016/09/zwu1474964173.png" alt="" />       
         <p>Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm</p>    
         <div href="/" onClick={()=>this.handle(8)}>Chi tiết thiết bị</div>  
        </Form>
        <Form className="form new">
          <Button class=" btn btn-secondary add-device"  onClick={()=>this.handle(9)}>Thêm thiết bị</Button>
        </Form>
      </Container>
    );
  }
}

export default Home;
