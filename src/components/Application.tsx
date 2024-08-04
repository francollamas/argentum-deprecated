import { Application as PixiApplication } from '@pixi/react'
import { ReactReduxContext } from 'react-redux'

// TODO: este file tiene oportunidad de mejora:
// cambiar los "any" por tipos especificos
// ver si hay forma de evitar tener codigo ilegible por tener tantos providers anidados.

export const ContextBridge = ({ children, Context, render }: any) => {
    return (
        <Context.Consumer>
            {(value: any) =>
                render(
                    <Context.Provider value={value}>
                        {children}
                    </Context.Provider>
                )
            }
        </Context.Consumer>
    )
}

export const Application = ({ children, ...props }: any) => {
    return (
        <ContextBridge
            Context={ReactReduxContext}
            render={(children: any) => (
                <PixiApplication {...props}>{children}</PixiApplication>
            )}
        >
            {children}
        </ContextBridge>
    )
}
