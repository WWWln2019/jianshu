import React from 'react';
import ReactDOM from 'react-dom';
//css文件一旦在一个文件中引用，则全局生效，可能会发生样式的重叠，我们需要使每个组件的样式都是独立的，不互相影响，建议使用styled-Components对样式进行管理
/*import './index.css';*/
import App from './App';
import {Provider} from "react-redux"
import store from "./store";
//1.styled-Components
ReactDOM.render(<Provider className="content" store={store}><App/></Provider>, document.getElementById('root'));

