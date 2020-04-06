# react-hocs

Study of Higher Order Components (HOC's) in React, starting from https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e

# Notes

A <strong>Higher Order Component</strong> is just a React component that wraps another one.

This pattern is usually implements as a function which is basically a class factory with the following signature:

`hocFactory:: W: React.Component => E: React.Component`

Where _W (WrappedComponent)_ is the `React.Component` being wrapped and _E (Enhanced Component)_ is the new HOC `React.Component` being returned.

"Wrap" can mean one of two things:

<ol>
<li>Props proxy: the HOC manipulates the props being passed to the WrappedComponent, W or</li>
<li>
    Inheritance Inversion: The HOC extends the WrappedComponent, W
</li>
</ol>

At a high level, HOC enables:

<ul>
    <li>Code reuse, logic, and bootstrap abstraction</li>
    <li>Render highjacking</li>
    <li>State abstraction and manipulation</li>
    <li>Props manipulation</li>
</ul>

### Props Proxy

    function ppHOC(WrappedComponent)
    return class PP extends React.Component {
            render() {
                return <WrappedComponent {...this.props} />
            }
        }
    }

The render method of the HOC returns a React Element of the type of the WrappedComponent. The props the HOC receives are also passed through, hence the name Props Proxy.

NOTE:

    <WrappedComponent {...this.props} />
    //is equivalent to
    React.createElement(WrappedComponent, this.props, null)

They both create a React Element that describes what React should render in its reconcilliantion process.
