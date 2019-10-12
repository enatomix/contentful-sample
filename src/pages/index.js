import React from 'react';
import {graphql,Link} from 'gatsby';
import Layout from '../components/layout';

const IndexPage=({data})=>{
  return(
    <Layout>
      {data.allContentfulPost.edges.map(edge=>{
        const author=edge.node.author;
        return(
          <div>
            <Link to={`/posts/${edge.node.slug}`}>
              {edge.node.title}
            </Link>
            <h2>{edge.node.title}</h2>
            {/* avatarの中身をかくにんしてからimgタグを利用する */}
            {edge.node.author.avatar && 
            <img width={40} src={author.avatar.fixed.src} 
          alt={author.name} />
          }
          <small>{author.name}</small>
          <p>{edge.node.content.content}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export const query=graphql`
{
  allContentfulPost{
    edges{
      node{
        title
        content{
          content
        }
        author{
          name
          description{
            description
          }
          avatar{
            fixed{
              width
              height
              src
            }
          }
        }
      }
    }
  }
}
`
export default IndexPage;