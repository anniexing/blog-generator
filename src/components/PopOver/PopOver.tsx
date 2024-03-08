'use client'

import usePost from '@/hooks/usePost'

export const PopOver = () => {
    const {popOverPostId} = usePost();
    return (
        <div
            className={`absolute top-0 left-0 z-100 bg-white p-5 popover min-w-[200px] max-w-xs rounded-lg border`}>
            <ul>
                <li className='py-3'>
                    <button type='button' className='flex flex-row'>
                        <svg className='h-4 w-4 text-slate-900'
                             viewBox='0 0 24 24'
                             strokeWidth='2' stroke='currentColor'
                             fill='none'
                             strokeLinecap='round'
                             strokeLinejoin='round'>
                            <path stroke='none' d='M0 0h24v24H0z' />
                            <path
                                d='M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3' />
                            <path d='M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3' />
                            <line x1='16' y1='5' x2='19' y2='8' />
                        </svg>
                        <span className='text-xs ml-2'>Rename</span>
                    </button>

                </li>
                <li className='py-3'>
                    <button type="button" className="flex flex-row">
                        <svg className="h-4 w-4 text-slate-900"
                             width="24"
                             height="24"
                             viewBox="0 0 24 24"
                             strokeWidth="2"
                             stroke="currentColor"
                             fill="none"
                             strokeLinecap="round"
                             strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="4" y1="7" x2="20" y2="7" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                        <span className="text-xs ml-2">Delete Blog</span>
                    </button>
                </li>
            </ul>
        </div>
    )
}
