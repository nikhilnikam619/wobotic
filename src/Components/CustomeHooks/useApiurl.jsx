import { useEffect, useState } from "react";

function useApiurl(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getapi = async () => {
      try {
        setLoading(true);

        const resp=await fetch(url,{
            method:"Get",
            headers:{
                "Content-Type":"application/json",
                Authorization:"Bearer 4ApVMIn5sTxeW7GQ5VWeWiy"
            }
        })

        if (!resp.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await resp.json();
        console.log(result.data)
        setData(result.data.cameras);
      } catch (e) {
        console.log("Error in API:", e);
      } finally {
        setLoading(false);
      }
    };

    getapi();
  }, [url]); 

  return { data, loading };
}

export default useApiurl;
