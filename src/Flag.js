import React from 'react'
import './Flag.css'
import International from './country_flags/International'
import America from './country_flags/America'
import Portugal from './country_flags/Portugal'
import Italy from './country_flags/Italy'
import Netherlands from './country_flags/Netherlands'
import Denmark from './country_flags/Denmark'
import France from './country_flags/France'
import Germany from './country_flags/Germany'
import Russia from './country_flags/Russia'
import Sweden from './country_flags/Sweden'
import Turkey from './country_flags/Turkey'
import Spain from './country_flags/Spain'
import Greece from './country_flags/Greece'

function Flag({ language, loading, dataReceived }) {
    switch (language) {
        case "":
            return <International loading={loading} dataReceived={dataReceived} />
        case "English":
            return <America dataReceived={dataReceived} />
        case "Portugeese":
            return <Portugal dataReceived={dataReceived} />
        case "Italian":
            return <Italy dataReceived={dataReceived} />
        case "Dutch":
            return <Netherlands dataReceived={dataReceived} />
        case "Danish":
            return <Denmark dataReceived={dataReceived} />
        case "French":
            return <France dataReceived={dataReceived} />
        case "German":
            return <Germany dataReceived={dataReceived} />
        case "Russian":
            return <Russia dataReceived={dataReceived} />
        case "Sweedish":
            return <Sweden dataReceived={dataReceived} />
        case "Turkish":
            return <Turkey dataReceived={dataReceived} />
        case "Spanish":
            return <Spain dataReceived={dataReceived} />
        case "Greek":
            return <Greece dataReceived={dataReceived} />
    }
}

export default Flag
