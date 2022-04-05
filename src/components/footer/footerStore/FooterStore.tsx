import React from 'react'
import FlexedItems from '../flexedItems/FlexedItems'
import Link from 'next/link'

export default function FooterStore() {
  return (
    <FlexedItems category="Store">
      <li>
        <Link href="/">
          <a>Best</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>New</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Outer</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Top</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Bottom</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Accessory</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Season Off</a>
        </Link>
      </li>
    </FlexedItems>
  )
}
