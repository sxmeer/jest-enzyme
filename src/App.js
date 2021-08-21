import Header from "./component/header";
import './app.scss';
import Headline from './component/headline';

const tempArr = [{
  fName: 'John',
  lName: 'Doe',
  email: 'johndoe@test.com',
  age: 24,
  onlineStatus: true
}];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          tempArr={tempArr}
          header="Posts"
          desc="Click the button to render posts" />
      </section>
    </div>
  );
}

export default App;
