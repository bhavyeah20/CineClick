import React from 'react'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar'
import "./home.scss"
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import requests from '../../requests'
const Home = ({type}) => {

    return (
        <div className="home">
            <Navbar/>
            <Featured type={type}/>
            <List fetchUrl={requests.fetchComedyMovies} listTitle="Continue Watching"/>
            <List fetchUrl={requests.fetchTrending} listTitle="Trending"/>
            <List fetchUrl={requests.fetchPopular} listTitle="Popular"/>
            <List fetchUrl={requests.fetchTopRated} listTitle="Top Rated"/>
            <List fetchUrl={requests.fetchUpcoming} listTitle="Upcoming"/>

        </div>
    )
}

export default Home
