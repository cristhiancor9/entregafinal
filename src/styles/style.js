import React from 'react';
import {
  StyleSheet,
} from 'react-native';


export const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
  textlist: {
    marginLeft: 12,
    fontSize: 16,
  },
  photolist: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  containerlist: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
    separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});
