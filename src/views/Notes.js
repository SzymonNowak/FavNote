import React from 'react';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/molecules/Card/Card';

const notes = [
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



  const Notes = () => (
  
  

    <UserPageTemplate pageType="note">
       {notes.map(item => 
        (
          <Card
            cardType="note"
            title={item.title}
            content={item.content}
            created={item.created}
            key={item.title}
          />
        )
      )
    }

    </UserPageTemplate>
  );
  
  export default Notes;
  