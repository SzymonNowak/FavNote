import React from 'react';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/molecules/Card/Card';

  const articles = [
    {
      title: 'aaaaa',
      content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      articleUrl: 'google.com',
      created: '1 day',
    },
    {
      title: 'aaaaa',
      content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      articleUrl: 'google.com',
      created: '1 day',
    },
    {
      title: 'aaaaa',
      content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      articleUrl: 'google.com',
      created: '1 day',
    },
    {
      title: 'aaaaa',
      content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      articleUrl: 'google.com',
      created: '1 day',
    },
  ]

const Articles = () => (
    <UserPageTemplate pageType="article">
     {articles.map(item => 
        (
          <Card
            cardType="article"
            title={item.title}
            content={item.content}
            articleUrl={item.articleUrl}
            created={item.created}
            key={item.title}
          />
        )
      )
    }
    </UserPageTemplate>
  );

export default Articles;