import React, { Component } from 'react';
import Header from "./component/header";
import Headline from './component/headline';
import SharedButton from './component/button';
import ListItem from './component/listitem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import './app.scss';

const tempArr = [{
  fName: 'John',
  lName: 'Doe',
  email: 'johndoe@test.com',
  age: 24,
  onlineStatus: true
}];

const initialState = {
  hideBtn: false
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { ...initialState };
    this.fetchPostA = this.fetchPostA.bind(this);
  }

  fetchPostA() {
    this.props.fetchPostsD();
    this.exampleMethod_updatesState();
  }

  exampleMethod_updatesState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn
    })
  }

  exampleMethod_returnsValue(num) {
    return num * 2;
  }

  render() {
    const configButton = {
      buttonText: 'get posts',
      emitEvent: this.fetchPostA
    }
    const { posts } = this.props;
    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline
            tempArr={tempArr}
            header="Posts"
            desc="Click the button to render posts" />

          {!this.state.hideBtn && <SharedButton {...configButton} />}

          {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                return <ListItem
                  key={index}
                  title={post.title}
                  desc={post.body} />
              })}
            </div>}
        </section>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPostsD: () => { dispatch(fetchPosts()) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
