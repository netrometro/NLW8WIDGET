import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

import { Copyright } from '../Copyright';
import { Option } from '../Option';

import { feedbackTypes } from '../../utils/feedbackTypes';
import { FeedbackType } from '../Widget';

interface Props {
  onFeedBackTypeChanged: (FeedbackType: FeedbackType) => void,
}

export function Options({ onFeedBackTypeChanged }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Deixe seu feedback
      </Text>

      <View style={styles.options}>
        {
          Object
            .entries(feedbackTypes)
            .map(([key, value]) => (
              <Option
                key={key}
                title={value.title}
                image={value.image}
                onPress={() => onFeedBackTypeChanged(key as FeedbackType)}
              />
            ))
        }
      </View>
      <Copyright />
    </View>
  );
}