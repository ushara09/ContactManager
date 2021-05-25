import React, { Component } from "react";
import PropTypes from "prop-types";
import { AiFillCaretDown, AiFillDelete } from "react-icons/ai";
import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    showContactinfo: false,
  };

  onShowClick = (e) => {
    this.setState({ showContactinfo: !this.state.showContactinfo });
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact; //destructuring
    const { showContactinfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <AiFillCaretDown
                  onClick={this.onShowClick}
                  style={{ cursor: "pointer" }}
                />
                <AiFillDelete
                  style={{ cursor: "pointer", color: "red", float: "right" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showContactinfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
