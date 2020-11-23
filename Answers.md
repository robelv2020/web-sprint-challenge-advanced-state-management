1. What problem does the context API help solve?
using context API we can avoid prop drilling on components,we no longer have to pass props down from component to component
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

*`actions` can be considered as events that are triggered by user interaction or the app itself which results in change of state
*`reducers` reducers are pure functions that return a predefined state based on the action that triggered
*`store` can be considered as a global state,the store contains our state for the entire application

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

* Application State is a global state like the store and we can access it throughout the application
* Component state is local to the component it resides in. and it is best to use Application state when the stateful logic or data represented is needed elsewhere.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

* a redux-thunk is a what allows us to perform asynchronous operations within our action creator.it changes our action-creator by making it return enhanced function that dispatches an action rather than dispatching the action itself.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

* for now redux since i have had time to practice on it.
