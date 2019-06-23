import React from 'react';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../templates/GridTemplate';

const notes = [
  {
    id: 1,
    title: 'aaaaa',
    content: 'aaaaaaaaaaaa',
    articleUrl: 'google.com',
    created: '1 day',
  },
  {
    id: 2,
    title: 'aaaaa',
    content: 'aaaaaaaaaaaaaaaaaaaaa',
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
    content: 'aaaaaaaaaaaaaaaaaaaaaaaaa',
    articleUrl: 'google.com',
    created: '1 day',
  },
]



  const Notes = () => (
  
  

    <GridTemplate pageType="notes">
       {notes.map(item => 
        (
          <Card
            cardType="notes"
            id={item.id}
            title={item.title}
            content={item.content}
            created={item.created}
            key={item.id}
          />
        )
      )
    }

    </GridTemplate>
  );
  
  export default Notes;
  