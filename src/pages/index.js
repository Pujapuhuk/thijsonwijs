
import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap" 
import { StructuredText } from 'react-datocms';

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home Page">
      <h2>{ data.datoCmsHomepage.title }</h2>
      <p>{ data.datoCmsHomepage.slogan }</p>
      {
                data.allDatoCmsWork.nodes.map((node) => (
                  <Card className="bg-dark text-white">
                  <Card.Img src={node.workCover.url} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>{node.title}</Card.Title>
                    <Card.Text>
                     
                    </Card.Text>
                    
                  </Card.ImgOverlay>
                </Card>
                ))
                }
                

    </Layout>
  )
}

export const query = graphql`
query {
  datoCmsHomepage {
    title
    slogan
  }
  allDatoCmsWork {
    nodes {
      title
      id
      description {
        value
      }
      workCover {
        url
      }
    }
  }
}
`
export default IndexPage