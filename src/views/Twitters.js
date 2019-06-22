import React from 'react';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/molecules/Card/Card';
const twitters = [
  {
    title: 'aaaaa',
    content: 'aaaaaaaaaaaaaaa',
    twitterName: 'https://avatars.io/twitter/elonmusk',
    created: '1 day',
  },
  {
    title: 'aaaaa',
    content: 'aaaaaaaaaaaaaaaaaaa',
    twitterName: 'https://avatars.io/twitter/elonmusk',
    created: '1 day',
  },
  {
    title: 'aaaaa',
    content: 'aaaaaaaaaaaaaaaaaa',
    twitterName: 'https://avatars.io/twitter/elonmusk',
    created: '1 day',
  },
  {
    title: 'aaaaa',
    content: 'aaaaaaaa',
    twitterName: 'https://avatars.io/twitter/elonmusk',
    created: '1 day',
  },
]
const Twitters = () => (
    <UserPageTemplate pageType="twitter">
       {twitters.map(item => 
        (
          <Card
            cardType="twitter"
            title={item.title}
            content={item.content}
            twitterName={item.twitterName}
            created={item.created}
            key={item.title}
          />
        )
      )
    }
    </UserPageTemplate>
  );

export default Twitters;