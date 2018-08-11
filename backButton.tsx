export fuction backButtonRestriction(): void {
window.history.pushState({}, '', null )
}


// we can use this to prevent users uses back button
history.scrollRestoration = 'manual'

// storing data on a history
getHistoryState = (): BrowserHistoryState | null => {
return window.history.state ? window.history.state : null
}

addToHistory = () => {
if (!this.props.routeProps) { return }


let historyState = {} as BrowserHistoryState

historyState.overlay = undefined
historyState.index = this.state.index

this.props.routeProps.history.replace('open', historyState)

this.props.routeProps.history.push('open', null)
}