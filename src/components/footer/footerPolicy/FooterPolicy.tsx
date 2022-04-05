import React from 'react'
import FlexedItems from '../flexedItems/FlexedItems'
import Link from 'next/link'

export default function FooterPolicy() {
  return (
    <FlexedItems category="Clone Enzos">
      <li>
        <Link href="/">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Terms & Conditions</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Guide</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Privacy Policy</a>
        </Link>
      </li>
    </FlexedItems>
  )
}
