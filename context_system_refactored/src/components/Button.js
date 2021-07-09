import React from 'react'
import ColorContext from '../contexts/ColorContext'
import LanguageContext from '../contexts/LanguageContext'

class Button extends React.Component {
    static contextType = LanguageContext

    renderButton(color) {
        const text = this.context.language === 'english' ? 'Submit' : 'Vorlegen'
        return (
            <button className={`ui button ${color}`}>
                {text}
            </button>
        )
    }

    render() {
        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        )
    }
}

export default Button