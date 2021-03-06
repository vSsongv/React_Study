import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
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

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  return (
    <article>
      <h2>Update</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onUpdate(title, body);
        }}>
        <p>
          <input type='text' name='title' value={title} onChange={(event) => setTitle(event.target.value)} />
        </p>
        <p>
          <textarea name='body' value={body} onChange={(event) => setBody(event.target.value)}></textarea>
        </p>
        <p>
          <input type='submit' value='Update' />
        </p>
      </form>
    </article>
  );
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);

  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'js', body: 'js is ...' },
  ]);

  let content = null;
  let contextControl = null;

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
    contextControl = (
      <>
        <li>
          <a
            href={'/update/' + id}
            onClick={(event) => {
              event.preventDefault();
              setMode('UPDATE');
            }}>
            Update
          </a>
        </li>
        <li>
          <input
            type='button'
            value='Delete'
            onClick={() => {
              const newTopics = [];
              topics.forEach((topic) => {
                if (topic.id !== id) {
                  newTopics.push(topic);
                }
              });
              setTopics(newTopics);
              setMode('WELCOME');
            }}
          />
        </li>
      </>
    );
  } else if (mode === 'CREATE') {
    content = (
      <Create
        onCreate={(title, body) => {
          const newTopics = [...topics, { id: nextId, title: title, body: body }];
          setNextId(nextId + 1);
          setTopics(newTopics);
          setMode('Read');
          setId(nextId);
        }}></Create>
    );
  } else if (mode === 'UPDATE') {
    let title,
      body = null;
    topics.forEach((topic) => {
      if (topic.id === id) {
        title = topic.title;
        body = topic.body;
      }
    });
    content = (
      <Update
        title={title}
        body={body}
        onUpdate={(title, body) => {
          const newTopics = [...topics];
          const updatedTopic = { id: id, title: title, body: body };
          newTopics.forEach((topic, idx, arr) => {
            if (topic.id === id) {
              arr[idx] = updatedTopic;
            }
          });
          console.log(newTopics);
          // for (let i = 0; i < newTopics.length; i++) {
          //   if (newTopics[i].id === id) {
          //     newTopics[i] = updatedTopic;
          //     break;
          //   }
          // }
          setTopics(newTopics);
        }}></Update>
    );
  }
  return (
    <div className='App'>
      <Header
        className='header'
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
      <ul>
        <li>
          <a
            href='/create'
            onClick={(event) => {
              event.preventDefault();
              setMode('CREATE');
            }}>
            Create
          </a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
