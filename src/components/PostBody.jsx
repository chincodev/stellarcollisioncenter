import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import BlockRenderer from './BlockRenderer'

export default function PostBody({ content }) {

	return (
		<div className={`mx-auto max-w-2xl post-body`}>
			<BlockContent blocks={content} serializers={{types: {block: BlockRenderer}}}/>
		</div>
	)
}
