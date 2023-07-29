// 
// import { Layout, Menu, Button } from 'antd';
// import Link from 'next/link';
// import { useSession, signOut } from "next-auth/react";
// import DropdownComponent from '../UI/Dropdown';

// const { Header } = Layout;


// const Navbar = () => {
// const { data: session } = useSession();

// console.log("from header", session);
//   return(
//     <Layout className="layout">
//       <Header className='flex justify-between'>
//         <Link href="/" className="text-2xl font-bold pt-4" style={{ color: 'white' }}> PC Builder</Link>
//         <div>
//           <DropdownComponent></DropdownComponent>
//         </div>
//         <div>
//           <Link href='/pcBuilder'>PC Builder</Link>
//         </div>
//         {/* <div>
//         <Button type="primary" style={{ marginRight: '10px' }}>Sign in</Button>
//         <Button className=''>Sign up</Button>
//       </div> */}
//         <div>
// {session?.user ? (
//   <items>
//     <Button onClick={() => signOut()} type="primary" danger>
//       Logout
//     </Button>
//   </items>
// ) : (
//   <Link
//     style={{ textDecoration: "none", color: "white" }}
//     href="/login"
//   >
//     <items>Login</items>
//   </Link>
// )}
//         </div>
//       </Header>
//     </Layout>
//   );
// }


// export default Navbar;




import Link from 'next/link';
import { useSession, signOut } from "next-auth/react";
import DropdownComponent from '../UI/Dropdown';


import React, { useState } from 'react';

const Navbar = () => {
  const { data: session } = useSession();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-500 py-4 md:py-2 md:px-4 w-full relative ">
      <div className="w-full">
        <div className="md:flex justify-between items-center px-2">
          <Link href='/' className="text-white font-bold text-2xl">AMT-Builds</Link>
          <button
            onClick={toggleMenu}
            className="block lg:hidden focus:outline-none p-1 absolute top-3 right-4"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 animate-spin"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-8 h-8 transform transition-transform ${isMenuOpen ? 'rotate-45' : 'rotate-0'
                  }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
          <div
            className={`${isMenuOpen ? 'block' : 'hidden'
              } lg:flex lg:items-center lg:w-auto`}
          >
            <div className="text-white lg:flex items-center space-x-4">
              <div>
                <Link
                  href="#"
                  className="hover:text-blue-300 md:px-4 ml-4 py-2 rounded transition-all duration-300 block no-underline"
                >
                  <DropdownComponent></DropdownComponent>
                </Link>
              </div>
              <div>
                <Link
                  href="/pcBuilder"
                  className="hover:text-blue-300 md:px-4 py-2 rounded transition-all duration-300 block no-underline"
                >
                  PC Builder
                </Link>
              </div>
              <div>
                <div
                  href="#"
                  className="hover:text-blue-300 md:px-4  py-2 rounded transition-all duration-300 block no-underline"
                >
                  {session?.user ? (
                    <items>
                      <button onClick={() => signOut()} type="primary" danger>
                        Logout
                      </button>
                    </items>
                  ) : (
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      href="/login"
                    >
                      <items>Login</items>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


