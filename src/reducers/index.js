const initialState = {
    twitters: [
        {
          id: 1,
          title: 'zydow',
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
    ],
    articles: [
      {
        id: 1,
        title: 'trtrtrt',
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
    ],
    notes: [
      {
        id: 1,
        title: 'bieda',
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
    ],
  };

const rootReducer = (state = initialState, action) => {
    return state;
}   


export default rootReducer;