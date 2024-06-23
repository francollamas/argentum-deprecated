import { Assets } from 'pixi.js'
import { PixiComponent } from '@pixi/react'
import { Spine } from 'pixi-spine'

const SpineComponent = PixiComponent('SpineComponent', {
    create: (props) => {
        // instantiate something and return it.
        // for instance:

        const raptor = '/raptor/raptor-pro.json'

        const animation = new Spine(props.resource.spineData)
        animation.x = 400
        animation.y = 400

        const spineAnimation = new Spine(props.resource.spineData)
        spineAnimation.state.setAnimation(0, 'walk', true)
        spineAnimation.state.timeScale = props.timeScale || 1
        spineAnimation.autoUpdate = true
        // Ajusta la escala si es necesario
        spineAnimation.scale.set(props.scale || 0.25)
        return spineAnimation
    },
    didMount: (instance, parent) => {
        // apply custom logic on mount
    },
    willUnmount: (instance, parent) => {
        // clean up before removal
    },
    applyProps: (instance, oldProps, newProps) => {
        // props changed
        // apply logic to the instance
        instance.x = newProps.x
        instance.y = newProps.y
    },
    config: {
        // destroy instance on unmount?
        // default true
        destroy: true,

        /// destroy its children on unmount?
        // default true
        destroyChildren: true,
    },
})

export { SpineComponent }
