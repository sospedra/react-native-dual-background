import React from 'react'
import PropTypes from 'prop-types'
import { View, SectionList } from 'react-native'

import { innerStyle, contentProps } from './services'

/**
 * A SectionList assigns the colors as follows:
 * - bottom is the SectionList's contentContainerStyle backgroundColor
 * - top is the SectionList's self backgroundColor
 *
 * The renderHeader is given the BOUNCE_MARGIN height to create the dual effect
 */
export default function DualSectionList ({ bottom, children, top, ...props }) {
  const ListHeaderComponent = () => (
    <View>
      <View style={innerStyle(top)} />
      {props.ListHeaderComponent && <props.ListHeaderComponent />}
    </View>
  )

  return (
    <SectionList
      {...props}
      {...contentProps(props, bottom, top)}
      ListHeaderComponent={ListHeaderComponent}
    />
  )
}

DualSectionList.propTypes = {
  bottom: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired
}
