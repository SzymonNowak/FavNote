import React from 'react';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../templates/GridTemplate';
const twitters = [
  {
    id: 1,
    title: 'aaaaa',
    content: 'aaaaaaaaaaaaaaa',
    twitterName: 'elonmusk',
    created: '1 day',
  },
  {
    id: 2,
    title: 'aaaaa',
    content: 'aaaaaaaaaaaaaaaaaaa',
    twitterName: 'elonmusk',
    created: '1 day',
  },
  {
    id: 3,
    title: 'aaaaa',
    content: 'aaaaaaaaaaaaaaaaaa',
    twitterName: 'elonmusk',
    created: '1 day',
  },
  {
    id: 4,
    title: 'aaaaa',
    content: 'aaaaaaaa',
    twitterName: 'elonmusk',
    created: '1 day',
  },
]
const Twitters = () => (
    <GridTemplate pageType="twitters">
       {twitters.map(item => 
        (
          <Card
            cardType="twitters"
            id={item.id}
            title={item.title}
            content={item.content}
            twitterName={item.twitterName}
            created={item.created}
            key={item.id}
          />
        )
      )
    }
    </GridTemplate>
  );

export default Twitters;