import BlockContent from '@sanity/block-content-to-react'
import React from 'react'

const BlockRenderer = (props) => {	
    const {style = 'normal'} = props.node
    if (/^h\d/.test(style)) {
        const level = style.replace(/[^\d]/g, '')
     
        return React.createElement(style, {className: `anchor-link`, id: 'h'+props.node._key}, props.children)
    }
    return BlockContent.defaultSerializers.types.block(props)
}

export default BlockRenderer
