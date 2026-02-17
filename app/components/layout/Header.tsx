'use client'

import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"



export const Header = () => {
    const pathname = usePathname()
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)

    const navigation = [
        { name: 'HELLO', href: '/' },
        { name: 'WORK', href: '/work' },
        { name: 'WHO I’M', href: '/about' },
        { name: 'CONTACT', href: '/contact' },
    ]

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/'
        return pathname.startsWith(href)
    }

    return (
        <nav className="min-h-[100px] py-9 px-10">
            <div className="flex justify-between items-center">
                <ul className="flex items-center gap-8">
                    {navigation.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className={`relative text-[14px] font-normal leading-[100%] tracking-wider pb-1.5 transition-colors duration-200 ${isActive(item.href) ? 'text-[#222222]' : 'text-[#222222A3]'
                                    }`}
                                onMouseEnter={() => setHoveredItem(item.name)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                {item.name}
                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${hoveredItem === item.name ? 'w-full' : 'w-0'
                                        } ${isActive(item.href) ? 'w-full' : ''}`}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
                <div>
                    <Image alt="Ammar portfolio" src={"/nav-logo.svg"} height={100} width={100} />
                </div>
            </div>
        </nav>
    )
}