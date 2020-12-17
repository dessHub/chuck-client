import React from 'react';
import { useParams, Link } from "react-router-dom";
import {useQuery, gql} from '@apollo/client';


const GET_RANDOM_JOKE = gql`
  query random($category: String!) {
    random(category: $category) {
      id
      value
      categories
      icon_url
    }
  }
`;

export const JokeByCategory = function(): any {

  const { category }: any = useParams();
  const { loading, data, error} = useQuery(GET_RANDOM_JOKE, {
    variables: { category: `${category}` },
    notifyOnNetworkStatusChange: true,
  });


  if(loading) return <div>Loading...</div>;
  console.log("error", error)
  const { random }: any = data;

 return (
  <main role="main">
    <section className="jumbotron text-center mb-0 bg-white">
        <div className="container">
            <h1 className="jumbotron-heading">{category} Random Quote</h1>
            <p className="lead text-muted">
            {random.value}.
            </p>
            <p>
            <Link to="/" className="btn btn-primary m-2">
             Back
            </Link>
            </p>
        </div>
    </section>
  </main>
 );
};