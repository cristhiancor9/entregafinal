import React from 'react';
import {
  StyleSheet,
} from 'react-native';

const SIZE = 12;
const HALO_RADIUS = 6;
const ARROW_SIZE = 7;
const ARROW_DISTANCE = 6;
const HALO_SIZE = SIZE + HALO_RADIUS;
const HEADING_BOX_SIZE = HALO_SIZE + ARROW_SIZE + ARROW_DISTANCE;

export const stylemap = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
bubblesearch: {
    backgroundColor: 'rgba(0,128,0,0.7)',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 20,
  },
bubbleRed: {
    backgroundColor: 'rgba(255,0,0,0.7)',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 20,
  },
  bubble: {
    backgroundColor: 'rgba(14,205,255,0.7)',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    paddingHorizontal: 10,
    alignItems: 'center',
    marginHorizontal: 10,
  },
    sliderContainer: {
    flexDirection: 'row',
    marginVertical: 0,
    textAlign: 'center',
    backgroundColor: 'rgba(192,192,192,0.7)',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: 'transparent',
  },
     customView: {
    width: 140,
    height: 180,
  },
  marker: {
    justifyContent: 'center',
    backgroundColor: '#2E9AFE',
    width: SIZE,
    height: SIZE,
    borderRadius: Math.ceil(SIZE / 2),
    margin: (HEADING_BOX_SIZE - SIZE) / 2,
  },
  containerPrice: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubblePrice: {
    flex: 0,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#A4A4A4',
    padding: 2,
    borderRadius: 3,
    borderColor: '#6E6E6E',
    borderWidth: 0.5,
  },
  dollar: {
    color: '#FFFFFF',
    fontSize: 10,
  },
  amount: {
    color: '#FFFFFF',
    fontSize: 13,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: 'transparent',
    borderTopColor: '#6E6E6E',
    alignSelf: 'center',
    marginTop: -9,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: 'transparent',
    borderTopColor: '#A4A4A4',
    alignSelf: 'center',
    marginTop: -0.5,
  },
  contenButon: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex:1
  },
   buttonIcon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textWhite:{
    color: '#FFFFFF'
  },
   slider: {
    flex:1,
  },
  textSlider: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
   buttonStation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
     marginVertical: 5,
  },
  bubbleblue: {
    backgroundColor: 'rgba(0,0,255,0.7)',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 20,
  },
  iconhori:{
  paddingHorizontal: 5,
  },
});