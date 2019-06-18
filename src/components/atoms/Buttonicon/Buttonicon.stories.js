import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonIcon from './Buttonicon';
import bulbIcon from '../../../assets/icons/bulb.svg'
import logoutIcon from '../../../assets/icons/logout.svg'
import magnifierIcon from '../../../assets/icons/magnifier.svg'
import penIcon from '../../../assets/icons/pen.svg'
import plusbIcon from '../../../assets/icons/plus.svg'
import twitterIcon from '../../../assets/icons/twitter.svg'
import styled from 'styled-components';


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    background-color: ${({theme}) => theme.note};

`;


storiesOf('ButtonIcon', module)
.addDecorator(story => <Wrapper> {story()} </Wrapper> )
.add('Normal', () => <ButtonIcon icon={bulbIcon}/>)
.add('Active', () => <ButtonIcon active icon={bulbIcon}/>)
.add('Logout', () => <ButtonIcon icon={logoutIcon}/>)
.add('Magni', () => <ButtonIcon icon={magnifierIcon}/>)
.add('Pen', () => <ButtonIcon icon={penIcon}/>)
.add('PLus', () => <ButtonIcon icon={plusbIcon}/>)
.add('Twitter', () => <ButtonIcon icon={twitterIcon}/>);

