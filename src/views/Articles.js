import React from 'react';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../templates/GridTemplate';
import { connect } from 'react-redux';

const Articles = ({articles}) => (
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
  const mapStateToProps = ({articles}) => {
    return { articles };
  };
    
 export default connect(mapStateToProps)(Articles);