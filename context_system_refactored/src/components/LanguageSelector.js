import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class LanguageSelector extends React.Component {

    //If you declare this, you can get access `this.context`
    static contextType = LanguageContext

    render() {
        return (
            <div>
                Select a language:
                <i
                    className='flag us'
                    onClick={() => this.context.onLanguageChange('english')}
                />
                <i
                    className='flag nl'
                    onClick={() => this.context.onLanguageChange('dutch')}
                />
            </div>
        )
    }
}

export default LanguageSelector