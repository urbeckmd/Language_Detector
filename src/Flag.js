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
import Sweden from './country_flags/Sweden'
import Turkey from './country_flags/Turkey'
import Spain from './country_flags/Spain'
import Czech_Republic from './country_flags/Czech_Republic'
import Finland from './country_flags/Finland'
import Hungary from './country_flags/Hungary'
import Iceland from './country_flags/Iceland'
import Norway from './country_flags/Norway'
import Poland from './country_flags/Poland'
import Slovakia from './country_flags/Slovakia'

function Flag({ language, loading, dataReceived }) {
    switch (language) {
        case "":
            return <International loading={loading} dataReceived={dataReceived} />
        case "English":
            return <America dataReceived={dataReceived} />
        case "Portuguese":
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
        case "Swedish":
            return <Sweden dataReceived={dataReceived} />
        case "Turkish":
            return <Turkey dataReceived={dataReceived} />
        case "Spanish":
            return <Spain dataReceived={dataReceived} />
        case "Czech":
            return <Czech_Republic dataReceived={dataReceived} />
        case "Finnish":
            return <Finland dataReceived={dataReceived} />
        case "Hungarian":
            return <Hungary dataReceived={dataReceived} />
        case "Icelandic":
            return <Iceland dataReceived={dataReceived} />
        case "Norwegian":
            return <Norway dataReceived={dataReceived} />
        case "Polish":
            return <Poland dataReceived={dataReceived} />
        case "Slovak":
            return <Slovakia dataReceived={dataReceived} />
    }
}

export default Flag
