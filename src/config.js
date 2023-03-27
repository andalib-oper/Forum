import React,{useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import MainNavigation from '../navigation/mainNavigation';

const config = () => {
  const authState = useSelector(state => state.authState);
  return (
    <NavigationContainer>
      <MainNavigation/>
    </NavigationContainer>
  );
};

export default config;