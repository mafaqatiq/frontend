import React from 'react'

const FooterSection = () => {
  return (
    <footer className="text-center text-[#b5b5b5] text-sm py-4 my-2 lg:my-0 sm:my-0">
      © {new Date().getFullYear()} All Rights Reserved.
    </footer>
  )
}

export default FooterSection