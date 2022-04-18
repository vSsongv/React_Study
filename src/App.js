import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header(props) {
  return (
    <header>
      <h1>
        <a
          href='/'
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
          }}>
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const list = props.topics.map((topic) => (
    <li key={topic.id}>
      <a
        id={topic.id}
        href={'/read/' + topic.id}
        onClick={(event) => {
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));
        }}>
        {topic.title}
      </a>
    </li>
  ));
  return <nav>{<ol>{list}</ol>}</nav>;
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onCreate(title, body);
        }}>
        <p>
          <input type='text' name='title' placeholder='new title' />
        </p>
        <p>
          <textarea name='body' placeholder='new body'></textarea>
        </p>
        <p>
          <input type='submit' value='Create' />
        </p>
      </form>
    </article>
  );
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);

  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'js', body: 'js is ...' },
  ];
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title='Welcome' body='Hello, WEB'></Article>;
  } else if (mode === 'READ') {
    let title,
      body = null;
    topics.forEach((topic) => {
      if (topic.id === id) {
        title = topic.title;
        body = topic.body;
      }
    });
    content = <Article title={title} body={body}></Article>;
  } else if (mode === 'CREATE') {
    content = <Create onCreate={(title, body) => {}}></Create>;
  }
  return (
    <div className='App'>
      <Header
        title='Web'
        onChangeMode={() => {
          setMode('WELCOME');
        }}></Header>
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode('READ');
          setId(_id);
        }}></Nav>
      {content}
      <a
        href='/create'
        onClick={(event) => {
          event.preventDefault();
          setMode('CREATE');
        }}>
        Create
      </a>
    </div>
  );
}

export default App;
