import { useExtend } from '@pixi/react'
import { Container } from 'pixi.js'
import { Example } from './Example'
import { Application } from './Application'

const App = () => {
    useExtend({ Container })

    return (
            <Application
                backgroundColor={0x000000}
            >
                <container x={150} y={150}>
                    <Example />
                </container>
            </Application>

    )
}

export default App
