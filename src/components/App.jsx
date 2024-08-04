import { extend } from '@pixi/react'
import { Example } from './Example'
import { Application } from './Application'
import { Container } from 'pixi.js'

extend({ Container })

const App = () => {
    return (
        <Application
            attachToDevtools
            backgroundColor={0x000000}
        >
            <container x={150} y={150}>
                <Example />
            </container>
        </Application>
    )
}

export default App
