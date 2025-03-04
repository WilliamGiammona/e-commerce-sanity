import { auth } from "@clerk/nextjs/server";

async function Orders() {
  const { userId } = await auth();
  return <div>Orders</div>;
}

export default Orders;
