// import React, { useState, useEffect } from "react";
import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/store/auth-context";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const ctx = useContext(AuthContext);
  /*
  //! here move romveItem to auth file
  // useEffect(() => {
  //   const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  //   if (storedUserLoggedInInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    //! here move romveItem to auth file
    // localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    //! here move romveItem to auth file
    // localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
*/

  // return (
  //     //todo -- Here we use Provider [object in react] from file auth-context
  //     //! here we add defult value in tag [auth]
  //     <AuthContext.Provider
  //       value={{
  //         isLoggedIn: isLoggedIn,
  //         onLogout: logoutHandler,
  //       }}
  //     >
  //       <React.Fragment>
  //         {/* <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> */}
  //         <MainHeader onLogout={logoutHandler} />
  //         <main>
  //           {!isLoggedIn && <Login onLogin={loginHandler} />}
  //           {isLoggedIn && <Home onLogout={logoutHandler} />}
  //         </main>
  //       </React.Fragment>
  //     </AuthContext.Provider>
  // );

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
