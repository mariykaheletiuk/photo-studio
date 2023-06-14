import {format} from 'date-fns'
import {uk} from 'date-fns/locale'

export default function DateComponent({dateString}) {
    return (<time dateTime={dateString}>
        <b>Опубліковано </b>
        {format(new Date(dateString), 'd LLL yyyy', {locale: uk})}
    </time>)
}