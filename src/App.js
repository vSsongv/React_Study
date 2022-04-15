import logo from './logo.svg';
import './App.css';
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
          props.onChangeMode(event.target.id);
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

function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'js', body: 'js is ...' },
  ];
  return (
    <div className='App'>
      <Header
        title='react'
        onChangeMode={() => {
          alert('Header');
        }}></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          alert(id);
        }}></Nav>
      <Article title='Welcome' body='Hello'></Article>
    </div>
  );
}

export default App;
