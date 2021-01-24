import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import Headline from './component/headline';
import Header from './component/header';
import SharedButton from './component/button';
import ListItem from './component/listItem';
import { fetchPosts } from './actions';
import './app.scss';

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}];


function App(props) {
  const dispatch = useDispatch();
  const [hideBtn, setHideBtn] = useState(false);

  const fetch = () => {
    dispatch(fetchPosts());
    exampleMethod_updatesState();
  }

  const configButton = {
    buttonText: 'Get posts',
    emitEvent: fetch
  };

  const { posts } = props;

  const exampleMethod_updatesState = () => {
    setHideBtn({
      hideBtn: !hideBtn
    });
  }

  const exampleMethod_resturnsAValue = (number) => {
    return number + 1;
  };

  return (
    <div className="App" data-test="appComponent">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr} />
        {!hideBtn &&
          <SharedButton {...configButton} />
        }
        {posts.length > 0 &&
          <div>
            {posts.map((post, index) => {
              const { title, body } = post;
              const configListItem = {
                title,
                desc: body
              };
              return (
                <ListItem key={index} {...configListItem} />
              );
            })}
          </div>
        }
      </section>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(App);
