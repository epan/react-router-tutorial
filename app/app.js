import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink } from 'react-router'

class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='address' component={Address}>
            <IndexRoute component={TwitterFeed} />
            <Route path='instagram' component={Instagram} />
            <Route path='query' component={Query} />
          </Route>
          <Route path='/namedComponent' component={NamedComponents}>
            <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
          </Route>
          <Route path='/about(/:name)' component={About} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

// CONTENT CONTAINER COMPONENT
const Container = (props) => (
  <div>
    <Nav />
    {props.children}
  </div>
)

// NAVIGATION LINKS
const Nav = () => (
  <div>
    <IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/address'>Address</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/about'>About</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/namedComponent'>Named Components</IndexLink>&nbsp;
    <IndexLink
      activeClassName='active'
      to={{
        pathname: '/address/query',
        query: { message: 'Hello from Route Query' }
      }}
    >
      Route Query
    </IndexLink>
  </div>
)

// COMPONENTS
const Home = () => <h1>Hello from Home!</h1>

const Address = (props) => (
  <div>
    <br />
    <IndexLink activeClassName='active' to='/address'>Twitter Feed</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/address/instagram'>Instagram Feed</IndexLink>
    <h1>We are at 555 Jackson St.</h1>
    {props.children}
  </div>
)
const NotFound = () => <h1>404 Not Found</h1>
const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>

const NamedComponents = (props) => (
  <div>
    {props.title}<br />
    {props.subTitle}
  </div>
)
const Title = () => (
  <h1>Hello from the Title Component</h1>
)
const SubTitle = () => (
  <h1>Hello from the SubTitle Component</h1>
)

const About = (props) => (
  <div>
    <h3>Welcome to the About Page</h3>
    {props.params.name && <h2>Hello, {props.params.name}</h2>}
  </div>
)

const Query = (props) => (
  <h2>{props.location.query.message}</h2>
)

export default App
