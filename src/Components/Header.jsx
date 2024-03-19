import React from "react";
import useUser from "../Hooks/Useuser";
import Logo from "../../src/assets/img/logo.png";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { PuffLoader } from "react-spinners";

function Header() {
  const { data, isLoading, isError } = useUser();

  return (
    <header className="w-full  flex items-center justify-center px-4 py-3 lg:px-8 border-b-1 border-gray-300 bg-red-600 z-50 gap-12 sticky top-0">
      {/* Logo */}
      <Link to={"/"}>
        <img
          src={Logo}
          alt="logo_here"
          className="w-12 h-auto object-contain"
        />
      </Link>
      {/* Input Section */}
      <div className="flex-1 border-1 border-slate-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200">
        <input
          type="text"
          placeholder="search here..."
          className="flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none"
        />
      </div>
      {/* Profile-Section */}
      <AnimatePresence>
        {isLoading ? (
          <PuffLoader color="red" size={40} />
        ) : (
          <React.Fragment>
            {data ? (
              <motion.div className="relative">
                {data.photoURL ? (
                  <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
                    <img
                      src={data.photoURL}
                      referrerPolicy="no-referer"
                      alt="user_img"
                      className="w-full h-full rounded-md object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-md relative flex items-center justify-center bg-slate-700 shadow-md cursor-pointer">
                    <p className="text-xl text-[#fff] font-bold">
                      {data.email[0]}
                    </p>
                  </div>
                )}

                {/* drop-down */}
                <AnimatePresence>
                  <motion.div className="absolute px-4 py-3 bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64">
                  {data.photoURL ? (
                  <div className="w-20 h-20 rounded-md relative flex flex-col items-center justify-center cursor-pointer">
                    <img
                      src={data.photoURL}
                      referrerPolicy="no-referer"
                      alt="user_img"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-full relative flex items-center justify-center bg-slate-700 shadow-md cursor-pointer">
                    <p className="text-3xl text-[#fff] font-bold">
                      {data.email[0]}
                    </p>
                  </div>
                )}
                {data?.displayName && (
                    <p className="text-lg text-txtDark font-[600]">{data.displayName}</p>
                )}
                {/* menus option */}
                <div>
                fuc
                {/* <Link to="/profile" className="text-txtLight hover:text-txtDark text-base">My Account</Link>
                <Link to="/create-template">Add new Template</Link> */}

                </div>

                  </motion.div>
                </AnimatePresence>
              </motion.div>
            ) : (
              <Link to="/authenticate">
                <motion.button>login</motion.button>
              </Link>
            )}
          </React.Fragment>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
