import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { orderType } from "../utils/types/e-commerce";

export const TransactionSelling = () => {
  const [sales, setSales] = useState<orderType[]>([]);

  useEffect(() => {
    fetchDataUser();
  }, []);

  function fetchDataUser() {
    axios
      .get("https://bluepath.my.id/sales")
      .then((res) => {
        setSales(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }
  return (
    <Layout>
      <div className="relative h-full">
        <div className="px-3 font-medium">
          <h1 className="pt-5 text-3xl mb-9 font-medium">TRANSACTION</h1>
          <div className="mb-9">
            <Link to={"/transaction-buy"}>
              <button className="btn rounded-none w-32 font-normal bg-[#EEEEEE] border-none text-[#000000]">
                BUY
              </button>
            </Link>
            <button className="btn rounded-none w-32 font-normal ">SELL</button>
          </div>
          {sales.length === 0 && <a> No transaction</a>}
          {sales.map((sale) => (
            <div key={sale.id}>
              <div className="border-2 bg-[#F0F0F0] p-3 text-left border-[#D9D9D9]">
                <p className="border-b-2 pb-5 border-[#D9D9D9]">
                  ID Transaction: {sale.id}
                </p>
                <div className="flex justify-between py-5">
                  <p>Total Transaction:</p>
                  <p className="font-bold">Rp. {sale.total_price}</p>
                </div>
                <p className="pb-5">Order Status:</p>
                <p className="font-bold text-right">{sale.order_status}</p>
              </div>
              <div className="flex justify-end">
                {sale.order_status == "success" ? (
                  <button className="btn rounded-none border-none font-normal h-12 w-20 bg-[#F0F0F0] text-xs mb-14 text-[#0F0F0F] btn-disabled ">
                    Proccess
                  </button>
                ) : (
                  <button className="btn rounded-none border-none font-normal h-12 w-20 bg-[#1F8A70] text-xs mb-14">
                    Proccess
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
