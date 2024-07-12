import { useEffect } from "react";

// @ts-ignore
const useUnloadWarning = (message) => {
  useEffect(() => {
    if (!message) return;

    // @ts-ignore
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = message; // For most browsers
      return message; // For some browsers
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [message]);
};

export default useUnloadWarning;
