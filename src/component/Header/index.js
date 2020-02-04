import React, { Component } from 'react';
import { Form, Container} from 'reactstrap';

class Header extends Component {

  render() {
    return (      
      <Container id="header">
        <Form className="form-header">
          <a href="#">Trang chủ</a>
          <a href="#">Giới thiệu</a>
          <a href="#">Danh mục</a> 
          <a href="#">Nhà sản xuất</a>
          <a href="#">Tin tức</a>
          <a href="#">Đăng nhập</a>
          <a href="#">Đăng kí</a>
          <a href="#">Thêm sản phẩm</a>
        </Form>
      </Container>
    );
  }
}

export default Header;
