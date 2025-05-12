import CompanyOverview from "./components/shared/companyOverview/CompanyOverview";
import Dashboard from "./components/shared/Dashboard";
import TrendCardList from "./components/shared/marketTrends/TrendCardList";
import NewsList from "./components/shared/News/NewsList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function App() {
  return (
    <Tabs defaultValue="dashboard" className="w-full">
      <TabsList variant="primary">
        <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        <TabsTrigger value="news">News</TabsTrigger>
        <TabsTrigger value="marketplace">Market Place</TabsTrigger>
        <TabsTrigger value="companyOverview">Company Overview</TabsTrigger>
      </TabsList>
      <TabsContent value="dashboard">
        <Dashboard />;
      </TabsContent>
      <TabsContent value="news">
        <NewsList />;
      </TabsContent>
      <TabsContent value="marketplace">
        <TrendCardList />;
      </TabsContent>
      <TabsContent value="companyOverview">
        <CompanyOverview />;
      </TabsContent>
    </Tabs>
  );
}

export default App;
