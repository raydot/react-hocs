# react-hocs

Study of Higher Order Components (HOC's) in React, starting from https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e

# Other Sources

[React's HOC page](https://reactjs.org/docs/higher-order-components.html)
[Dan Abramov post on React Components, Elements, and Instances](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)

# Notes

A <strong>Higher Order Component</strong> is just a React component that wraps another one.

This pattern is usually implementd as a function which is basically a class factory with the following signature:

`hocFactory:: W: React.Component => E: React.Component`

Where _W (WrappedComponent)_ is the `React.Component` being wrapped and _E (Enhanced Component)_ is the new HOC `React.Component` being returned.

"Wrap" can mean one of two things:

<ol>
<li>Props proxy: the HOC manipulates the props being passed to the _WrappedComponent W_ or</li>
<li>
    Inheritance Inversion: The HOC extends the _WrappedComponent W_
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

They both create a React Element that describes what React should render in its reconcilliation process.

**What can be done with Props Proxy?**

<ul>
    <li>Manipulating props</li>
    <li> Accessing the instance via refs</li>
    <li> Abstracting State</li>
    <li> Wrapping the <em>WrappedComponent</em> with other elements</li>
</ul>

**Manipulating Props**
You can read, add, edit and remove the props that are being passed to the _WrappedCompnent_. Be careful with deleting or editing important props.

Example:

<pre>
function ppHOC(WrappedComponent) {
    return class PP extends React.Component {
        render() {
            const newProps = {
                user: currentLoggedInUser
            }
            return <WrappedComponent {...this.props} {...newProps}/>
            return <WrappedComponent {...props}/>
        }
    }
}
</pre>

**Accessing the instance via Refs**
You can access _this_ (the instance of _WrappedComponent_) with a _ref_, but you will need a fill initial normal render of the _WrappedComponent_ for the ref to be calculated. This means you need to return the _WrappedComponent_ from the HOC render method and move React through the reconciliation process in order to create the ref.

<pre>
function refsHOC(WrappedComponent) {
    return class RefsHOC extends React.Component {
        proc(wrappedComponentInstance) {
            wrappedComponentInstance.method()
        }

        render() {
            const props = Object.assign({}, this.props, {refs: this.proc.bind(this)})
        }
    }
}
</pre>

When the Wrapped Component is rendered the ref callback will be executed, creating a reference to the _WrappedComponent_ instance. This can be used for adding and reading instance props and calling instance methods.

_State abstraction_

## Project ideas

Create a React app that subscribes to three different data sources.

<ol>
<li>Weather Report</li>
<li>Comments thread</li>
<li>Blog post</li>
</ol>

Use an HOC to manage data subscription for each.
