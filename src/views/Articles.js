import React from 'react';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../templates/GridTemplate';

  const articles = [
    {
      id: 1,
      title: 'aaaaa',
      content: 'aaaaaaaaaaaaaaaaaaaaaaa',
      articleUrl: 'google.com',
      created: '1 day',
    },
    {
      id: 2,
      title: 'aaaaa',
      content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      articleUrl: 'google.com',
      created: '1 day',
    },
    {
      id: 3,
      title: 'aaaaa',
      content: 'aaaaaaaaaaaaaaaaaaaaaaaaa',
      articleUrl: 'google.com',
      created: '1 day',
    },
    {
      id: 4,
      title: 'aaaaa',
      content: 'aaaaaaaaaaa',
      articleUrl: 'google.com',
      created: '1 day',
    },
  ]

const Articles = () => (
    <GridTemplate pageType="articles">
     {articles.map(item => 
        (
          <Card
            cardType="articles"
            id={item.id}
            title={item.title}
            content={item.content}
            articleUrl={item.articleUrl}
            created={item.created}
            key={item.id}
          />
        )
      )
    }
    </GridTemplate>
  );

export default Articles;