import React from "react";
import PropTypes from "prop-types";

const ENTER_KEY_CODE = 13;

// name={props.input.name}
// value={props.input.value}
// onChange={props.input.onChange}
export default class EditableLabel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: this.props.isEditing || false
    };
  }

  // componentDidUpdate(prevProps) {
  //   if(prevProps.text !== this.props.text) {
  //       this.setState({
  //         text: this.props.text || "",
  //     });
  //   }

  //   if(prevProps.isEditing !== this.props.isEditing) {
  //     this.setState({
  //       isEditing: this.state.isEditing || this.props.isEditing || false
  //   });
  //   }
  // }

  isTextValueValid = () => {
    return (
      typeof this.props.value != "undefined" &&
      this.props.value.trim().length > 0
    );
  };

  handleFocus = () => {
    if (this.state.isEditing) {
      if (typeof this.props.onFocusOut === "function") {
        this.props.onFocusOut(this.props.value);
      }
    } else {
      if (typeof this.props.onFocus === "function") {
        this.props.onFocus(this.props.value);
      }
    }

    if (this.isTextValueValid()) {
      this.setState({
        isEditing: !this.state.isEditing
      });
    } else {
      if (this.state.isEditing) {
        this.setState({
          isEditing: this.props.emptyEdit || false
        });
      } else {
        this.setState({
          isEditing: true
        });
      }
    }
  };

  handleChange = () => {
    this.setState({
      text: this.textInput.value
    });
    this.props.onChange(this.textInput.value);
  };

  handleKeyDown = e => {
    if (e.keyCode === ENTER_KEY_CODE) {
      this.handleEnterKey();
    }
  };

  handleEnterKey = () => {
    this.handleFocus();
  };

  render() {
    if (this.state.isEditing) {
      return (
        <div>
          <input
            type="text"
            className={this.props.inputClassName}
            ref={input => {
              this.textInput = input;
            }}
            value={this.props.value}
            onChange={this.handleChange}
            onBlur={this.handleFocus}
            onKeyDown={this.handleKeyDown}
            style={{
              width: this.props.inputWidth,
              height: this.props.inputHeight,
              fontSize: this.props.inputFontSize,
              fontWeight: this.props.inputFontWeight,
              borderWidth: this.props.inputBorderWidth
            }}
            placeholder={this.props.inputPlaceHolder}
            tabIndex={this.props.inputTabIndex}
            autoFocus
          />
        </div>
      );
    }

    const labelText = this.isTextValueValid()
      ? this.props.value
      : this.props.labelPlaceHolder || "";
    return (
      <div>
        <label
          className={this.props.labelClassName}
          onClick={this.handleFocus}
          style={{
            fontSize: this.props.labelFontSize,
            fontWeight: this.props.labelFontWeight
          }}
        >
          {labelText}
        </label>
      </div>
    );
  }
}

EditableLabel.propTypes = {
  isEditing: PropTypes.bool,
  emptyEdit: PropTypes.bool,

  labelClassName: PropTypes.string,
  labelFontSize: PropTypes.string,
  labelFontWeight: PropTypes.string,
  labelPlaceHolder: PropTypes.string,

  inputPlaceHolder: PropTypes.string,
  inputTabIndex: PropTypes.number,
  inputWidth: PropTypes.string,
  inputHeight: PropTypes.string,
  inputFontSize: PropTypes.string,
  inputFontWeight: PropTypes.string,
  inputClassName: PropTypes.string,
  inputBorderWidth: PropTypes.string,

  onFocus: PropTypes.func,
  onFocusOut: PropTypes.func
};
