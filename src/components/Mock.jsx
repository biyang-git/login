/* eslint-disable */
import React from "react";
import axios from "axios";
import {} from "antd";
// import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Card } from "antd";
import "../components/login.css";

const { Option } = Select;
const handleSubmit = (e) => {
  e.preventDefault();
  this.props.form.validateFields((err, values) => {
    if (!err) {
      console.log("received values of form", values);
    }
  });
};

class Mock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gData: null,
      pData: null,
      usr: "",
      password: "",
    };
    this.userChange = this.userChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  userChange(e) {
    this.setState({ user: e.target.value });
  }

  passwordChange(e) {
    this.setState({ password: e.target.value });
  }

  submit() {
    if (this.state.password != "123") {
      window.alert("密码错误");
    } else {
      const { history } = this.props;
      history.push("/hock");
    }
  }

  getDate1 = () => {
    axios
      .get("/getdata1", {
        params: {
          id: "123",
        },
      })
      .then((res) => {
        //console.log(res.data)
        this.setState({
          gData: res.data.message,
        });
      })
      .catch((err) => {
        //console.log(err)
      });
  };

  getDate2 = () => {
    axios
      .post("/postdata1", {
        params: {
          name: "jack",
        },
      })
      .then((res) => {
        //console.log(res.data)
        this.setState({
          pData: res.data.message,
        });
      })
      .catch((err) => {
        // console.log(err)
      });
  };

  render() {
    const form = this.props.form;
    return (
      <Card
        title="OF ADMIN SYS"
        className="login-form"
        style={{width:480,position:"absolute",left:"50%",top:"50%"}}
      >
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Item>
            <Input
              id="user"
              placeholder="用户名"
              style={{ marginBottom: "10px" }}
              onChange={this.userChange}
            ></Input>
          </Form.Item>
          <Form.Item>
            <Input
              id="password"
              type="password"
              placeholder="密码"
              style={{ marginBottom: "10px" }}
              onChange={this.passwordChange}
            ></Input>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              content="登录"
              style={{ marginBottom: "10px" }}
              onClick={this.submit.bind(this)}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}
const WarpLogin = Form.create()(Mock);
export default WarpLogin;
