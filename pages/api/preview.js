import {getPreviewPostBySlug} from '../../lib/api'

export default async function preview(req, res) {
    const {secret, slug} = req.query

    if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
        return res.status(401).json({message: 'Invalid token'})
    }

    const post = await getPreviewPostBySlug(slug)

    if (!post) {
        return res.status(401).json({message: 'Invalid slug'})
    }

    res.setDraftMode({enable: true})

    const url = `/posts/${post.slug}`
    res.setHeader('Content-Type', 'text/html')
    res.write(`<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>
    </html>`)
    res.end()
}