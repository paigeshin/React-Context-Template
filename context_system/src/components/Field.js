import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class Field extends React.Component {
    static contextType = LanguageContext
    render() {

        const currentLanguage = this.context
        return (
            <div className='ui field'>
                <label>
                    {/* <LanguageContext.Consumer>
                        {(value) => value === 'english' ? 'Name' : 'Naam'}
                    </LanguageContext.Consumer> */}
                    {currentLanguage === 'english' ? 'Name' : 'Naam'}
                </label>
                <input/>
            </div>
        )
    }
}

export default Field