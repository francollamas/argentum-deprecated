import { Container, Sprite, withFilters } from '@pixi/react'
import gold from '../assets/gold.png'
import clothes from '../assets/clothes.png'
import { User, addUser, userSelector } from '../store/slice/userSlice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { useEffect, useState } from 'react'
import { BlurFilter, Assets } from 'pixi.js'
import { SpineComponent } from './SpineComponent'

const Filters = withFilters(Container, {
    blur: BlurFilter,
})

export const Example = () => {
    const users = useAppSelector(userSelector)
    const dispatch = useAppDispatch()
    const [ress, setRess] = useState(null)

    useEffect(() => {
        //console.log(users)
        const raptor = 'raptor/raptor-pro.json'

        Assets.load(raptor).then((resource) => {
            setRess(resource)
        })
    }, [])

    const handleAddUser = () => {
        const newUser: User = {
            id: 'abc',
            name: 'John',
            email: 'john@email.com',
        }

        dispatch(addUser(newUser))
    }

    return (
        <Container>
            <Filters blur={{ blur: 5 }}>
                <Sprite
                    image={users.length % 2 == 0 ? gold : clothes}
                    eventMode="static"
                    pointerdown={handleAddUser}
                />

                {ress && (
                    <SpineComponent
                        resource={ress}
                        x={200}
                        y={200}
                        scale={0.25}
                        timeScale={1}
                    />
                )}
            </Filters>
        </Container>
    )
}
