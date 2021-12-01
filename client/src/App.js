import './App.css';
import React, {useState, useEffect} from 'react';
import List from './components/List';
import Modal from './components/Modal';

function App() {  
  let [contents, setContents] = useState([]); 
  
  useEffect(() => { 

    async function callAPi(){
    const response = await fetch ('/api/contents');
    const body = await response.json();
    console.log(body);
    return body;
    }
    callAPi()
      .then(res => setContents(res))
      .catch(err => console.log(err))
  }, ['/api/contents'])
  
  const changeMan = () => {
    let newArr = [...contents];
    if (contents[0].title == '남자 코트 추천')
    newArr[0].title = '여자 코트 추천'
    else
    newArr[0].title = '남자 코트 추천'
    
    setContents(newArr);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 blog</div>
      </div>
      {contents.map(content => (<List key={content.id} title={content.title} date={content.date} />))}
      <button onClick={changeMan}>버튼</button>
      <Modal />
    </div>
  );
}

export default App;
