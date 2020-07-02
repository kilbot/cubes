import _ from 'lodash'
import React from 'react'
import { View } from 'react-native'
import { fileAbsolute } from 'paths.macro'
import MaterialGlyphs from '@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/MaterialIcons.json'
import { Centered } from '../../../storybook/decorators/Centered'
import { DarkBackground } from '../../../storybook/decorators/DarkBackground'
import { useStyles } from '../../../theme'
import { getStoryTitle } from '../../../storybook/get-story-title'
import { Box } from '../../structure/Box/Box'
import { Caption } from '../../text'
import { Icon, IconProps, IconName } from './Icon'

const IconContainer: React.FC<Omit<IconProps, 'name'>> = props => {
  const styles = useStyles(() => ({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    single: {
      width: 90,
    },
  }))

  const icons = _.keys(MaterialGlyphs).map(icon => (
    <View key={icon} style={styles.single}>
      <Box space="small" padding="small" align="center">
        <Icon name={icon as IconName} {...props} />
        <Caption textAlign="center">{icon}</Caption>
      </Box>
    </View>
  ))

  return <View style={styles.container}>{icons}</View>
}

export default {
  title: getStoryTitle(fileAbsolute),
  component: Icon,
  decorators: [Centered],
}

export const Example: React.FC = () => <Icon name="fingerprint" />
export const All: React.FC = () => <IconContainer />
export const All_Inverse: React.FC & { story: unknown } = () => <IconContainer color="inverse" />
All_Inverse.story = {
  decorators: [DarkBackground],
}

export const LargeAccent: React.FC = () => <Icon name="home" size="large" color="accent" />
