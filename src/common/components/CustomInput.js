import React from "react";
import BaseComponent from "../../modules/baseComponent";

class CustomInput extends BaseComponent {
    render() {
        return (
            <div className="display-flex flex-column align-items-start w-100">
                <div className="display-flex flex-column w-100">
                    <input id={this.props.id} type={this.props.type} placeholder={this.props.placeholder}
                           onChange={this.props.onChange} required={this.props.required}
                           autoComplete={this.props.autoComplete}
                           className={"w-100 outline-none input-border " + this.props.className}
                           value={this.props.value}
                           disabled={this.props.disabled}
                           name={this.props.name}
                           onFocus={this.props.onFocus}
                    />
                    <div className="display-flex fc-red fs-14 p-1">{this.props.error}</div>
                </div>
            </div>
        );

    }
}

export default CustomInput;
