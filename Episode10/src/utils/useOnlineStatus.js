// import { useState, useEffect } from "react";
// const useOnlineStatus = () => {
//     const [onlineStatus, setOnlineStatus] = useState(true);

//     useEffect(() => {
//         window.addEventListener("offline", () => {
//             setOnlineStatus(false);
//         })

//         window.addEventListener("online", () => {
//             setOnlineStatus(true);
//         })
//     },[])
//     console.log(onlineStatus);
//     return onlineStatus;
// };

// export default useOnlineStatus;

import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  useEffect(() => {
    const handleOffline = () => setOnlineStatus(false);
    const handleOnline = () => setOnlineStatus(true);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
