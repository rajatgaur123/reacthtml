import React from 'react'
import Section_3 from '../../section_3/Section_3'
import Section_2 from '../../section_2/Section_2'
import Section from '../../section/Section'
import Section4 from '../../section_4/Section4'
import Section5 from '../../section_5/Section5'
import Section6 from '../../section_6/Section6'
import Layout from '../../layout/Layout'

const Home = () => {
  return (
    <Layout>
      <Section/>
       <Section_2/>
       <Section_3/>
       <Section4/>
       <Section5/>
       <Section6/>
    </Layout>
  )
}

export default Home
