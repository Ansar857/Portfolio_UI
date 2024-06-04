import React, { useEffect } from "react";

const LocalStorageChangeDatect = () => {
  useEffect(() => {
    const handleStorageChange = (event: any) => {
      if (event.storageArea === localStorage && event.key === "user:name") {
        console.log("Hello");
        localStorage.clear();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  return <div>LocalStorageChangeDatect</div>;
};

export default LocalStorageChangeDatect;
