import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'



const ProjectPage = ( {data} ) => {
    return (
        <Layout pageTitle="Projects">
               {
                data.allDatoCmsWork.nodes.map((node) => (
                    <article key={node.id}>

                      <h2>{node.title}</h2>
                     
                    <p>Posted: {node.meta.createdAt}</p>
                  </article>
                ))
                }
      </Layout>
    )
}

export const query = graphql`
query {
  allDatoCmsWork {
    nodes {
      title
      id
      meta {
        createdAt(formatString: "D MMM YYYY")
      }
    }
    
  }
}

`

export default ProjectPage