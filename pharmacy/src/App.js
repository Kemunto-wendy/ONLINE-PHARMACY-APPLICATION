import React from 'react';
import { ReactDOM } from 'react-dom/client';
import { BrowseRouter, Route, Routes} from "react-router-dom"
import { AppProvider } from './components/Druginfor/drug';
import { AppContext } from './components/Druginfor/drug';
import './App.css';
import Drug from './components/Druginfor/drug';
import Header from './components/Header/header';
import Search from './components/Searchbar/search';

const root = ReactDOM.createToot(document.getElementById("root"))
root.render(
  <AppProvider>
<BrowseRouter>
  <Routes>
    <Route path = "/" element = {<Header />} />
    <Route path = "/" element = {<Search />} />
    <Route path = "/" element = {<Drug />} />
  </Routes>
</BrowseRouter>
</AppProvider>
)
