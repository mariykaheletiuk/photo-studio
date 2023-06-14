export default async function exit(_, res) {
    res.setDraftMode({enable: false})

    res.writeHead(307, {Location: '/'})
    res.end()
}