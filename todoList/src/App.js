import React from 'react';
import './style.css';
import { useState } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ToDoContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 450px;
  margin-top: 10px;
  // border: 1px solid gray;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 19px;

  .title {
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  background-color: #BB89E5;
  color: white;
  padding: 25px 15px;
  width: 450px;
  box-sizing: border-box;
  border-radius: 18px 18px 0px 0px;
  }

  .toDoInput {
    width: 450px;
    height: 60px;
    font-size: 20px;
    box-sizing: border-box;
    border: none
    } 
  }
`;

export const ListContainer = styled.div`
  background-color: #D5C8F0;
  position: fixed;
  top: 160px;
  display: flex;
  flex-direction: column;
  margin: 0px 0px 10px 0px;
  height: 78%;
  width: 450px;
  overflow: auto;
  border-radius: 0px 0px 18px 18px;
  margin-bottom: 10px;

  .list {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding:10px 30px;
    box-sizing: border-box;
    font-size: 20px;
    font-weight: 600;
    color: white;
  }

`;

export default function App() {
  const [toDo, setTodo] = useState(''); // input에 들어가는 개별 to Do
  const [toDos, setTodos] = useState([]); // 작성한 to do list를 배열에 넣은 것

  const onChange = (event) => {
    setTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(); // 새로고침 막기
    if (event.key === 'Enter' && event.target.value !== '') {
      setTodos([event.target.value, ...toDos]);
      setTodo('');
    }
  };

  const onDelete = (indexToDelete) => {
    setTodos(
      toDos.filter((el) => {
        return el !== toDos[indexToDelete];
      })
    );
  };

  return (
    <>
      <Container>
        <ToDoContainer>
          <Header>
            <div className="title">Kyoorim's To-do List: {toDos.length}</div>
            <input
              className="toDoInput"
              onChange={onChange}
              value={toDo} // 이거 안쓰면 49번째줄 setTodo("")가 실행안됨
              type="text"
              placeholder="  Please enter to save your todo.."
              onKeyUp={(e) => {
                onSubmit(e);
              }}
            />
          </Header>
          <ListContainer>
            {toDos.map((item, index) => (
              <ul className="list">
                <div>{index + 1}</div>
                <li key={index}>{item}</li>
                <div
                  style={{ cursor: 'pointer' }}
                  onClick={() => onDelete(index)}
                >
                  X
                </div>
              </ul>
            ))}
          </ListContainer>
        </ToDoContainer>
      </Container>
    </>
  );
}
