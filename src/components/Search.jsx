import React from 'react'
import { useState } from "react";
import { Input } from 'antd';
import { Button } from 'antd';
import { Row, Col, Divider } from 'antd';
import { Table, Tag, Space } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { searchBooks } from "../thunks/searchBookApi";


const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'BookCover',
    dataIndex: 'bookcover',
    key: 'bookcover',
  },
]

const style = {
  padding: '20px 500px',
};


const Search = () => {


const dispatch = useDispatch();

const searchResult = useSelector((state) => state.search.items);

const [state, setState] = useState("");

const data = searchResult.map(row => ({ title: row.volumeInfo.title, author: row.volumeInfo?.authors
  ? row.volumeInfo?.authors[0]
  : "", bookcover: <img scr={row.volumeInfo?.imageLinks?.thumbnail} alt="book cover"/>  }));


const clickHandler = () => {
    dispatch(searchBooks(state));
  };

const changeHandler = (event) =>{
    setState(event.target.value);
  }
 
  return (
    <>
      <Row gutter={[16, 24]}>
      <Row className="gutter-row" span={12}>
        <h1>SearchBook</h1>
        <div style={style}>
             <Input placeholder="Search" onChange={changeHandler}/><br/><br/>
             <Button type="primary" onClick={clickHandler}>Search</Button>

        </div>
      </Row><br/>
      <Row className="gutter-row" span={12}>
        <div style={style}>
             <Table columns={columns} dataSource={data} />
             {console.log(searchResult)}
       
        </div>
      </Row>
      
    </Row>







    
    </>
  )
}

export default Search;