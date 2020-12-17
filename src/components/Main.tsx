import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {useQuery, gql} from '@apollo/client';
import { Card } from './Card';

const GET_CATEGORY_JOKE = gql`
  query random($category: String!) {
    random(category: $category) {
      id
      value
      categories
      icon_url
    }
  }
`;

const GET_RANDOM_JOKE = gql`
    query {
      joke {
        value
      }
    }
`;

export const Main = function(): any {
  const [categories, setCategories] = useState<Array<String>>([]);
  const [joke, setJoke] = useState<string>('');

  const { data: dataJoke, loading: loadingJoke, refetch} = useQuery(GET_RANDOM_JOKE);

  useEffect(() => {
    if(!loadingJoke) {
      setJoke(dataJoke.joke.value);
    }
  })

  const {loading, error, data} = useQuery(gql`
    query {
      category {
        categories
      }
    }
  `);

  useEffect(() => {
    console.log("data", data)
   if(!loading){ setCategories(data.category.categories) };
  })

  if(loadingJoke || loading) return <div>Loading...</div>;

 return (
  <main role="main">
    <section className="jumbotron text-center mb-0 bg-white">
        <div className="container">
            <h1 className="jumbotron-heading">Quote Of The Day</h1>
            <p className="lead text-muted">
            {joke}.
            </p>
            <p>
            <a href="#" className="btn btn-primary m-2" onClick={() => refetch()}>
            Refresh
            </a>
            </p>
        </div>
    </section>
   <div className="album py-5 bg-light">
    <div className="container text-center">
      <h3 className="jumbotron-heading title-categories" >Get Quote by Category</h3>
     <div className="row">
      {categories.map((item: any):any => {
        return (<div className="col-md-1" key={item}>
          <div className="card box-shadow">
              <div className="btn-group">
              <Link
                to={`/joke/${item}`}
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                {item}
              </Link>
              </div>
          </div>
        </div>)
      })}
     </div>
    </div>
   </div>
  </main>
 );
};