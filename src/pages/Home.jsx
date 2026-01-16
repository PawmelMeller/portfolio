import React from 'react'
import Landing from '../components/landing/Index'

import Project from '../components/Project/Index'
import CenterButton from '../components/CenterButton'
import About from '../components/About/Index'
import Marqueue from '../components/Marqueue/Index'
import { Helmet } from 'react-helmet-async'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Craze Studio - Tworzenie Stron i Sklepów Internetowych | Sopot, Trójmiasto</title>
                <meta name="description" content="Profesjonalne strony www, sklepy internetowe i aplikacje. Craze Studio - Twój partner w cyfrowym świecie. Sopot, Gdynia, Gdańsk. 508 843 219." />
            </Helmet>
            <Landing />

            <Project />
            <CenterButton />
            <About />
            <Marqueue />
        </>
    )
}

export default Home
