import React from 'react';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../templates/GridTemplate';
import { connect } from 'react-redux';



const Twitters = ({twitters}) => (
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

 const mapStateToProps = ({twitters}) => {
   return { twitters };
 };
   
export default connect(mapStateToProps)(Twitters);