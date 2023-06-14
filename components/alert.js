import Container from './container'
import cn from 'classnames'
import {GIT_PATH} from '../lib/constants'

export default function Alert({preview}) {
    return (<div
        className={cn('border-b', {
            'bg-accent-7 border-accent-7 text-white': preview, 'bg-accent-1 border-accent-2': !preview,
        })}
    >
        <Container>
            <div className="py-2 text-center text-sm">
                {preview ? (<>
                    Ця сторінка є попереднім переглядом.{' '}
                    <a
                        href="/api/exit-preview"
                        className="underline hover:text-cyan duration-200 transition-colors"
                    >
                        Натисніть тут
                    </a>{' '}
                    щоб вийти з режиму попереднього перегляду.
                </>) : (<>
                    Репозиторій проекту ви можете знайти на{' '}
                    <a
                        href={GIT_PATH}
                        className="underline hover:text-success duration-200 transition-colors"
                    >
                        GitHub
                    </a>
                    .
                </>)}
            </div>
        </Container>
    </div>)
}