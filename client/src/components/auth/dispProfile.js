import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class dispProfile extends Component {
  constructor() {
    super();
    this.state = {
      name: this.state.name,
      email: this.state.email,
      user_type: this.state.user_type,
      gender: this.state.gender,
      phone: this.state.phone,
      address: this.state.address,
      about_me: this.state.about_me,
      errors: {}
    };
  }
