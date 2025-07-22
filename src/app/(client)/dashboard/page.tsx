import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import DashboardClient from "@/views/page-dashboard";


export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  return <DashboardClient />;
}
