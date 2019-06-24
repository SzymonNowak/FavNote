import React from 'react';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../templates/GridTemplate';
import { connect } from 'react-redux';



  const Notes = ({notes}) => (
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


   const mapStateToProps = ({notes}) => {
   return { notes };
 };
   
export default connect(mapStateToProps)(Notes);